def read_room_links(filename):
    """
    Read and parse room links from a text file into a dictionary.

    Args:
        filename (str): Path to the input file

    Returns:
        dict: Dictionary with room names as keys and lists of URLs as values
    """
    rooms = {}
    current_room = None

    with open(filename, "r") as file:
        for line in file:
            # Strip whitespace and skip empty lines
            line = line.strip()
            if not line:
                continue

            # If line doesn't start with http, it's a room name
            if not line.startswith("http"):
                current_room = line
                rooms[current_room] = []
            else:
                # Add URL to current room's list
                if current_room:
                    rooms[current_room].append(line)

    return rooms


def scrape_lamp_details(url):
    """
    Scrape lamp details from a given URL.

    Args:
        url (str): The URL to scrape

    Returns:
        dict: Dictionary containing lamp details
    """
    import requests
    from bs4 import BeautifulSoup

    try:
        # Get the webpage content
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for bad status codes
        soup = BeautifulSoup(response.text, "html.parser")

        # Extract the details
        title = soup.find("h1").text.strip() if soup.find("h1") else None

        # Extract price
        price_elem = soup.find("p", class_="price")
        price = price_elem.find("strong").text.strip() if price_elem else None

        # Extract showroom from subtitle
        subtitle = soup.find("p", class_="article-title-sub")
        showroom = None
        if subtitle:
            # Extract showroom number from text like "Ø 60cm - Hout met zwart - Showroomkamer 0.13"
            text = subtitle.text.strip()
            if "Showroomkamer" in text:
                showroom = text.split("Showroomkamer")[-1].strip()

        # Extract main image URL
        main_image = None
        first_picture = soup.find("picture", class_="u-carousel-item")
        if first_picture:
            img_tag = first_picture.find("img")
            if img_tag:
                main_image = img_tag.get("src")

        return {
            "title": title,
            "price": price,
            "showroom": showroom,
            "main_image": main_image,
        }

    except Exception as e:
        print(f"Error scraping {url}: {str(e)}")
        return None


def save_lamp_details(room_details, output_file="python/lamp_details.txt"):
    """
    Save lamp details to a text file.

    Args:
        room_details (dict): Dictionary containing room names and lamp details
        output_file (str): Path to the output file
    """
    with open(output_file, "w", encoding="utf-8") as f:
        for room, lamps in room_details.items():
            # Write room header
            f.write(f"\n{'=' * 50}\n")
            f.write(f"Room: {room}\n")
            f.write(f"{'=' * 50}\n\n")

            # Write lamp details
            for lamp in lamps:
                if lamp:  # Only write if lamp details exist
                    f.write(f"Title: {lamp['title']}\n")
                    f.write(f"Price: {lamp['price']}\n")
                    f.write(f"Showroom: {lamp['showroom']}\n")
                    f.write(f"Main Image: {lamp['main_image']}\n")
                    f.write(f"{'-' * 50}\n\n")


def main():
    # Read and parse the room links
    room_links = read_room_links("python/list.txt")

    # Dictionary to store all room details
    all_room_details = {}

    # Scrape and store the data
    for room, links in room_links.items():
        print(f"\nScraping Room: {room}")
        lamp_details = []
        for link in links:
            details = scrape_lamp_details(link)
            if details:
                lamp_details.append(details)
                print(f"Successfully scraped: {details['title']}")
        all_room_details[room] = lamp_details

    # Save all details to file
    save_lamp_details(all_room_details)
    print("\nAll lamp details have been saved to 'python/lamp_details.txt'")


if __name__ == "__main__":
    main()
