"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Bedroom from "./rooms/Bedroom"
import LivingRoom from "./rooms/LivingRoom"
import Study from "./rooms/Study"
import Kitchen from "./rooms/Kitchen"
import Storage from "./rooms/Storage"


export default function LampStore() {
  return (
    <Tabs defaultValue="living-room" className="w-full">
      <TabsList className="grid w-full grid-cols-3 h-auto sm:grid-cols-6">
        <TabsTrigger value="living-room" className="py-3 text-sm sm:text-base">
          Living Room
        </TabsTrigger>
        <TabsTrigger value="bedroom" className="py-3 text-sm sm:text-base">
          Bedroom
        </TabsTrigger>
        <TabsTrigger value="dining-room" className="py-3 text-sm sm:text-base">
          Dining Room
        </TabsTrigger>
        <TabsTrigger value="study" className="py-3 text-sm sm:text-base">
          Study
        </TabsTrigger>
        <TabsTrigger value="kitchen" className="py-3 text-sm sm:text-base">
          Kitchen
        </TabsTrigger>
        <TabsTrigger value="storage" className="py-3 text-sm sm:text-base">
          Storage
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
      <TabsContent value="study">
        <Study />
      </TabsContent>
      <TabsContent value="kitchen">
        <Kitchen />
      </TabsContent>
      <TabsContent value="storage">
        <Storage />
      </TabsContent>
    </Tabs>
  )
}

