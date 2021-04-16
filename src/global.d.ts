import { Client } from "discord.js";
import Command from "./lib/classes/Command/Command";
import Event from "./lib/classes/Event/Event";

declare global {
  namespace NodeJS {
    interface Global {
      client: Client
      server: SocketIOClient.Socket
      assets: Assets
      commands: { [command: string]: Command }
    }
  }
}

export interface Assets {
  Event: typeof Event
  Command: typeof Command
}
