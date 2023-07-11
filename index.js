const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const chalk = require('chalk');
const client = new Client({
  checkUpdate: false,
}); // All partials are loaded automatically
const cf = require("cfonts");
const colors = require(`colors`);
const config = require(`./config.json`);
const fetch = require("node-fetch");
const x = require("images-generator");
const db = require(`quick.db`);
const dayjs = require("dayjs");
const wait = require('util').promisify(setTimeout);
const path = require("path");
const fs = require("fs-extra");
const cors = require("cors");
const SimplDB = require('simpl.db');
const DB = new SimplDB();
const Users = DB.createCollection('users');
const collection = Users.getAll();
const temporos = require('temporos');
const { Webhook, MessageBuilder } = require("discord-webhook-node");
const cron = require('node-cron');
const webhook = new Webhook(config.grinding.webhook || process.env.webhook);


/* ┃*** *** *** Azury Selfbot©️ *** *** ***┃ */
/* ┃      This Code is Owned By Azury     ┃ */
/* ┃*** *** *** Azury Selfbot©️ *** *** ***┃ */


console.clear()

   console.log(chalk.cyan.bold('STARTUP STATUS━━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
console.log(`${chalk.cyan.bold('┃')} Starting the Selfbot   : ✅`)

setTimeout(async()=> {

console.log(`${chalk.cyan.bold('┃')} Debugging the Selfbot  : ✅`)


console.log(`${chalk.cyan.bold('┃')} Finalizing the Selfbot : ✅`)

  await wait(2000)

console.log(`${chalk.cyan.bold('┃')} Buffering the Selfbot  : ✅`)

  await wait(2000)


console.log(`${chalk.cyan.bold('┃')} Booting the Selfbot    : ✅`)
   console.log(chalk.cyan.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
}, 1000)

 // Web Server
var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.enable("trust proxy");
app.use(cors());

// set the view engine to ejs

app.get("/", async (req, res) => {
  res.render(path.resolve("./webserver"), {
    //   "progressValue": pr
  });
});

app.get("/api", async (req, res) => {
  res.json(collection
  );
});

app.listen(7500);

client.on('ready', async () => {
await wait(4000)
  webhook.setUsername('Dank Grinder')
     console.log(chalk.red.bold('STARTUP MESSAGE━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
  console.log(`${chalk.red.bold('┃')} Azury-Grinder          : Started`)
  console.log(`${chalk.red.bold('┃')} ${chalk.gray.bold(`Logging into the User`)}`)
     console.log(chalk.red.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));
  
     console.log(chalk.green.bold('LOGIN STATUS━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'));
  console.log(`${chalk.green.bold('┃')} Logged in as: ${client.user.tag}`)
  webhook.setAvatar('https://media.discordapp.net/attachments/1031166956541333675/1057671549831880724/image.png')
  await wait(1000)
     console.log(chalk.green.bold('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'));

  cron.schedule('0 0 * * *', () => {
   runDaily();
  });
  
  /*temporos.scheduleTask(runDaily, null, {
  weekdays: [1, 2, 3, 4, 5, 6, 7],  // Run on Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays..ect
  timesOfDay: ['13:00']  // 1pm every day
});*/

  /* Dank Memer ++ Cheats */
  const coolTimes = [3000, 4300, 2030, 2000, 3200]
  
  setInterval(async () => {
    const DB = db.get('grinding_disabled')
    if(!DB) {
    await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'hunt')
    setTimeout(async() => {
    await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'fish')
      setTimeout(async() => {
        await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'dig')
        await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'search')
        // handle the rest from the search event
        db.delete('grinding_disabled')
      }, [3000, 4300, 2030, 2000, 3200][Math.floor(Math.random() * coolTimes.length)])
    }, [3000, 4300, 2030, 2000, 3200][Math.floor(Math.random() * coolTimes.length)])
      } else {
        db.set('grinding_disabled', true)
      }
  }, randomInteger(60000, 340000))
  /* Dank Memer ++ Cheats */
})

client.on('messageCreate', async (message, args) => {
  if(message.author == client.user) {
  const commandName = message.content.toLowerCase();

  if(commandName == config.prefix+'toggle') {
    message.edit(`Toggling the dank grinder...`)

    const DB = db.get('grinding_disabled')

    message.edit(`Grinding mode has been ${DB ? '**enabled**' : '**disabled**'}!`)
    
    if(!DB) {
      db.set('grinding_disabled', true)
    } else {
      db.delete('grinding_disabled')
    }

  }

  if(commandName == config.prefix+'status') {
    const DB = db.get('grinding_disabled')

    message.edit(`***Dank grinding - ${DB ? 'Disabled' : 'Enabled'}***\n• Use *${config.prefix}toggle* to enable/disable it!`)
  }

  }

  // ---- Grinding part
  if(message.channel.id == config.grinding.dmchannel) {
    // ---- Lucky horsehoe expired
    if(message.embeds[0]?.description?.includes("Lucky Horseshoe expired!")) {
      useItem("Lucky Horseshoe");
    }
  }
  if(message.channel.id !== config.grinding.channel) return;
  // ---- Get the user's balance and post
    if (message.embeds[0]?.title?.includes(client.user.username + "'s Balance")) {
      purse = message.embeds[0].fields[0].value
      acc_bal = Number(purse.replace("⏣ ", "").replace(/,/g, ''));
      bank = message.embeds[0].fields[1].value
      acc_bank = Number(bank.replace("⏣ ", "").replace(/,/g, '').replace(" ", "").split("/")[0]);
      net = message.embeds[0].fields[5].value
      acc_net = Number(net.replace("⏣ ", "").replace(/,/g, ''));
      if (Users.entries < 1) {
        Users.create({
          name: client.user.username,
          wallet: acc_bal,
          bank: acc_bank,
          net: acc_net,
          wallet_unformatted: purse,
          bank_unformatted: bank,
          net_unformatted: net,
        });
      } else if (Users.entries >= 1) {
        const user = Users.get(target => target.name === client.user.username);
        user.name = client.user.username
        user.wallet = acc_bal
        user.bank = acc_bank
        user.net = acc_net
        user.wallet_unformatted = purse
        user.bank_unformatted = bank
        user.net_unformatted = net
        user.save();
      }
      
      app.get("/api_test", async (req, res) => {
        res.json(collection);
      });
    }

  // ---- Handle rifle breaking
  if (message.embeds[0]?.description?.includes("Hunting Rifle broke")) {
     webhook.send(`\\🚨 [${client.user.toString()} your rifle broke!](${message.url}) I will attempt to buy you a new pole!`)
    buyItem("Hunting Rifle", "1")
  }
  // ---- Handle fishing rod breaking
  if (message.embeds[0]?.description?.includes("Fishing Pole broke")) {
     webhook.send(`\\🚨 [${client.user.toString()} your fishing pole broke!](${message.url}) I will attempt to buy you a new pole!`)
    buyItem("Fishing Pole", "1")
  }
  // ---- Handle shovel breaking
  if (message.embeds[0]?.description?.includes("Shovel broke")) {
     webhook.send(`\\🚨 [${client.user.toString()} your shovel broke!](${message.url}) I will attempt to buy you a new shovel!`)
    buyItem("Shovel", "1")
  }

  // ---- Handle the /highlow command
  if(message.embeds[0]?.author?.name.includes("'s high-low game")) {
    clickRandomButton(message, 0);
    setTimeout(async() => {
     await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'balance')
         

       setTimeout(async() => {
      total_wallet = 0
      total_bank = 0

         fetch(config.website+"/api").then(res => res.json()).then(out => {
        i = +out.length - +out.length
        out.forEach(() => {
          if (i <= out.length) {
            total_wallet = +total_wallet + out[i].wallet
            total_bank = +total_bank + out[i].bank
          }
          if (out[i] == 'undefined') {
            out[i].name = ''
            out[i].wallet = ''
            out[i].bank = ''
            out[i].net = ''
            j = ''
          }
          i = +i + +1
        })
         webhook.send(`\\🔁 You completed a successful grind! You ended up with ⏣ ${String(total_wallet).replace(/(.)(?=(\d{3})+$)/g,'$1,')} in your wallet!`)
         })
       }, 2000)
       }, 2000)
  }

  // ---- Handle the /search command
   if (message.embeds[0]?.description?.includes("Where do you want to search?")) {
      clickRandomButton(message, 0);
     setTimeout(async() => {
       if(!config.grinding.safemode) {
    await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'crime')
       } else {
         await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'highlow')
       }
       }, 2000)
  }

  // ---- Handle the /crime command
  if(message.embeds[0]?.description?.includes("What crime do you want to commit?")) {
    clickRandomButton(message, 0);
    setTimeout(async() => {
    await client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'highlow')
       }, 2000)
  }

  // ---- Notify of deaths
  if (message.embeds[0]?.title?.includes("Your lifesaver protected you!")) {
      webhook.send(`\\🚨 [${client.user.toString()} you almost died!](${message.url}) You were protected by your lifesaver, becareful!\n\\↪ I will attempt to buy you a new lifesaver whenever you have 0x left!`)
    const btnLabel = message.components[0]?.components[0].label?.match(/\d+/g);
    console.log(btnLabel)

    if(btnLabel <= 1) {
     buyItem("Life Saver", "1");
    }
  }

  // ---- LifeSaver bought
  if(message.embeds[0]?.author?.name.includes("Successful Life Saver purchase")) {
    webhook.send(`\\🏪 I have bought your lifesaver for ⏣ 200,000, and equipped it!`)
  }
  // ---- Rifle bought
  if(message.embeds[0]?.author?.name.includes("Successful Hunting Rifle purchase")) {
    webhook.send(`\\🏪 I have bought your rifle for ⏣ 35,000, and equipped it!`)
  }
  // ---- Rod bought
  if(message.embeds[0]?.author?.name.includes("Successful Fishing Pole purchase")) {
    webhook.send(`\\🏪 I have bought your pole for ⏣ 35,000, and equipped it!`)
  }
  // ---- Shovel bought
  if(message.embeds[0]?.author?.name.includes("Successful Shovel purchase")) {
    webhook.send(`\\🏪 I have bought your shovel for ⏣ 35,000, and equipped it!`)
  }

  // ---- Failed to auto-buy
  if(message.embeds[0]?.description?.includes("You don't have enough money in your wallet")) {
    webhook.send(`\\🚨 [${client.user.toString()} I tried to auto-buy](${message.url}) you an item shown above but you don't have enough to purchase it!`)
  }
  

})

client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (newMessage.author?.id !== '270904126974590976' || newMessage.channel.id != config.grinding.channel) return;

    playMiniGames(newMessage, true);
    playFGame(newMessage, config.grinding.channel);
    // INFO: Caught :
    let isCaught = newMessage.embeds[0]?.description?.match(
      /(Dragon|Kraken|Legendary Fish), nice (shot|catch)!/
    ); //null or Array eg. ["Dragon, nice shot!","Dragon","shot"] => [whole match,group1,group2]
    if (isCaught) {
      let [_, item, action] = isCaught; //yeah dragon, fish and kraken are item in dank memer
      // action : shot or catch

      webhook.send(`\\🎉 ${client.user.toString()} you __${action}__ a **${item}! Good job!`)
    }
  });
 
client.login(config.token || process.env.token).catch(async(e)=> {
  console.log(`⚠️ FAILED TO LOGIN! INVALID TOKEN DETECTED!`.red.bold)
});

/*           ANTI CRASHING            ¦¦           ANTI CRASHING           */ 
process.on('unhandledRejection', (reason, p) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase().red.dim);
    console.log(reason.stack.yellow.dim ? String(reason.stack).yellow.dim : String(reason).yellow.dim);
    console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase().red.dim);
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase().red.dim);
    console.log(err.stack.yellow.dim ? err.stack.yellow.dim : err.yellow.dim)
    console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase().red.dim);
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase().red.dim);
  });
  process.on('beforeExit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] before Exit'.toUpperCase().red.dim);
    console.log(code.yellow.dim);
    console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase().red.dim);
  });
  process.on('exit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] exit'.toUpperCase().red.dim);
    console.log(code.yellow.dim);
    console.log('=== exit ===\n\n\n\n\n'.toUpperCase().red.dim);
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase().red.dim);
    console.log(type, promise, reason.yellow.dim);
    console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase().red.dim);
  });

function randomInteger(min, max) {
  if (min == max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function playMiniGames(message, edited = false) {
  let description = message.embeds[0]?.description?.replace(
    /<a?(:[^:]*:)\d+>/g,
    "$1"
  ); // format emoji <:id:severId> to :id:
  let positions = description
    ?.split("\n")
    .slice(1) //remove first line
    .map((e) => e.split(":").filter((e) => e !== "")); // split by : and remove blank string

  // INFO: Dodge the Fireball!
  if (description?.includes("Dodge the Fireball!")) {
    let fireballPostion = positions[1].length - 1; // 1 is fireball line and length-1 will be postion where fireball is
    let safePostion = ["Left", "Middle", "Right"].filter(
      (e, idx) => idx !== fireballPostion
    );

    let buttons = message.components[0]?.components;
    let btn = buttons.filter((e) => safePostion.includes(e.label))[
      randomInteger(0, 1)
    ]; // filter and remove unsafe position button and select random from 0 or 1 (total 3 button 1 is unsafe other is safe so)
    await clickButton(message, btn, true);
  } else if (description?.includes("Catch the fish!")) {
    let fishPosition = positions[0].length - 1; // here 0 because 2nd line was fish not a dragon like has in dodge fireball
    let btn = message.components[0]?.components[fishPosition];
    await clickButton(message, btn, true);
  }
}
async function playFGame(message, channel) {
  if (message.channel.id === channel) {
    if (message.embeds[0] && message.embeds[0].description?.includes("F")) {
      const btn = message.components[0]?.components[0];
      if (btn?.label === "F") {
        clickButton(message, btn);
      } else if (
        message.embeds[0]?.description?.includes(
          "Attack the boss by clicking"
        )
      ) {
        playBossGame(message);
      }
    }
  }
}
async function playBossGame(message) {
  const btn = message.components[0]?.components[0];
  let interval = setInterval(async () => {
    if (btn.disabled) return clearInterval(interval);
    clickButton(message, btn);
  }, randomInteger(600, 850));
}
async function clickButton(message, btn, once = true) {
  if (once) {
    try {
      let r = await message.clickButton(btn.customId);
      // if(btn.type === 'BUTTON')
      // isBotFree = true;
      return r;
    } catch (err) {
      return false;
    }
  }
  // INFO: try until success
  let interval = setInterval(
    async () => {
      try {
        // if (btn.disabled) return clearInterval(interval);
        await message.clickButton(btn.customId);
        clearInterval(interval);
      } catch (err) { }
    },
    600 * 1.5,
    850 * 1.2
  );
}
async function clickRandomButton(message, rows) {
  setTimeout(async () => {
    const components =
      message.components[randomInteger(0, rows)]?.components;
    const len = components?.length;
    if (!len) return;
    let btn = components[Math.floor(Math.random() * len)];
    return clickButton(message, btn);
  }, randomInteger(600, 850));
}

function runDaily() {
 client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', 'daily');
}

function buyItem(item, count) {
client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', "shop buy", item, count);
}

function useItem(item) {
client.channels.cache.get(config.grinding.channel).sendSlash('270904126974590976', "use", item);
}
