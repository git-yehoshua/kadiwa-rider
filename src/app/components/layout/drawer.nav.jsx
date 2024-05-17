import * as React from "react";

import { Drawer, DrawerContent } from "@/components/ui/drawer";

export default function Drawer() {
  return (
    <Drawer open={true}>
      <DrawerContent>
        <div className="flex h-52"></div>
      </DrawerContent>
    </Drawer>
  );
}
