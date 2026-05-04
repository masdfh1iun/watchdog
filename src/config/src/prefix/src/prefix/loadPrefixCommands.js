import { loadPrefixCommands } from "./prefix/loadPrefixCommands.js";

loadPrefixCommands(client);

client.on("prefixCommand", (message, command, args) => {
  const cmd = client.prefixCommands.get(command);
  if (cmd) cmd.run(client, message, args);
});
