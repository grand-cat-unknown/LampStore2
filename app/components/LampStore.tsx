"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LivingRoom from "./rooms/LivingRoom"
import Bedroom from "./rooms/Bedroom"
import DiningRoom from "./rooms/DiningRoom"

export default function LampStore() {
  return (
    <Tabs defaultValue="living-room" className="w-full">
      <TabsList className="grid w-full grid-cols-3 h-auto">
        <TabsTrigger value="living-room" className="py-3 text-sm sm:text-base">
          Living Room
        </TabsTrigger>
        <TabsTrigger value="bedroom" className="py-3 text-sm sm:text-base">
          Bedroom
        </TabsTrigger>
        <TabsTrigger value="dining-room" className="py-3 text-sm sm:text-base">
          Dining Room
        </TabsTrigger>
      </TabsList>
      <TabsContent value="living-room">
        <LivingRoom />
      </TabsContent>
      <TabsContent value="bedroom">
        <Bedroom />
      </TabsContent>
      <TabsContent value="dining-room">
        <DiningRoom />
      </TabsContent>
    </Tabs>
  )
}

