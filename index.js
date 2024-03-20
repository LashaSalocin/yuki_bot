import { Client } from "discord.js-selfbot-v13";
import "dotenv/config";

const client = new Client({
  checkUpdate: false,
});

client.on("ready", async () => {
  console.log("client is ready");
});

client.on("messageCreate", async (message) => {
  if (message.channelId === "1219332694937440266") {
    if (message.embeds) {
      const embeed = message.embeds[0];
      const timestampString = embeed.fields[3].value;
      const timestampPattern = /\*\*Timestamp:\*\* (\d+)/;
      const match = timestampString.match(timestampPattern);

      if (match) {
        const timestampNumber = parseInt(match[1]) * 1000;
        const currentTime = Date.now();
        const differenceMs = timestampNumber - currentTime;
        const differenceMinutes = Math.floor(differenceMs / (1000 * 60));
        console.log("Difference in minutes:", differenceMinutes);
      }
    }
  }
});

client.login(process.env.TOKEN);
