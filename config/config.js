/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	electronOptions: {
    webPreferences: {
      webviewTag: true
    }
  },
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{ //alert
			module: "alert",
		},
	
		{ //clock
			module: "clock",
			position: "top_center"
		},
		{ //calendar
			module: "calendar",
			header: "My Calendar",
			position: "bottom_left",
			colored:true,
			coloredSymbolOnly: true,
			config: {
				calendars: [
					{
						symbol: "gift",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
						color: '#ffc0cb',

											},
											{
						symbol: "calendar-check-o",
						url: "https://calendar.google.com/calendar/ical/aarishrajwani1%40gmail.com/public/basic.ics",
						color: '#ffc0cb',
					},
						
				]
			}
		},
	
		{ //compliments
			module: "compliments",
			position: "lower_third"

		},
				{ //weather-default
			module: "weather",
			position: "top_center",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				locationID: "4706057", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "c8864feee60e1e726b896df32cc3ca8b"
			}
		},
		
		{  
  module: "MMM-Weather",
  position: "bottom_right",
  configDeepMerge: true,
  config: {
    debug: true,
    updateInterval: "15m", // 15 minutes
    updateFadeSpeed: 500,
    api: {
      key: "c8864feee60e1e726b896df32cc3ca8b",
       latitude: 33.038334,
       longitude: -97.006111,
      //units: config.units,
      //language: config.language
    },
    display: {
      CurrentConditions: false,
      ExtraCurrentConditions: false,
      Summary: false,
      ForecastTableColumnHeaderIcons: true,
      HourlyForecast: true,
      DailyForecast: true,
      Precipitation: true,
      Wind: true,
      InlineIcons: true,
      Feels: true,
      SunCondition: false,
      Humidity: false,
      UV: false,
      Beaufort: false
    },
    personalize: {
      hourlyForecastInterval: 3,
      maxHourliesToShow: 3,
      maxDailiesToShow: 5,
      concise: true,
      colored : true,
      forecastLayout: "table",
      forecastHeaderText: ""
    },
    labels: {
      high: "H",
      low: "L",
      timeFormat: "kk[h]"
    }
  }
},

		
		{ //newsfeed
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{ //update notification - bugsonet
  module: "MMM-UpdateNotification",
  position: "top_bar",
  config: {
    debug: false,
    updateInterval: 10 * 60 * 1000, // every 10 minutes
    startDelay: 60 * 1000, // delay before 1st scan
    ignoreModules: [],
    updateCommands: [],
    notification: {
      useTelegramBot: true,
      sendReady: true,
      useScreen: true,
      useCallback: true
    },
    update: {
      autoUpdate: false,
      autoRestart: true,
      usePM2: true,
      PM2Name: "1",
      defaultCommand: "git pull && npm install",
      updateMagicMirror: false,
      logToConsole: true,
      timeout: 2 * 60 * 1000
    }
  }
},
		{ //gmail - personal
	module: 'MMM-GmailFeed',
	position: 'bottom_left',
	config: {
		username: 'aarishrajwani1@gmail.com',
		password: 'A@rish156433',
		updateInterval: 60000,
		maxEmails: 5,
		maxSubjectLength: 38,
		maxFromLength: 15,
		playSound: true
	}
},
		{ //gmail - schoool
	module: 'MMM-GmailFeed', 
	position: 'bottom_left',
	config: {
		username: 'arajwani@newtech.coppellisd.com',
		password: 'cisd42095',
		updateInterval: 60000,
		maxEmails: 5,
		maxSubjectLength: 38,
		maxFromLength: 15,
		playSound: true
	}
},
		{ //snowboy
  module: 'MMM-Snowboy',
  configDeepMerge: true,
  config: {
    debug: true,
    autoStart: true,
    micConfig: {
      recorder: "arecord",
      device: "default",
      audioGain: 2.0,
      applyFrontend: true,
    },
    detectors: [
      {
        Model: "jarvis",
        Sensitivity: null,
        onDetected: {
          notification: "GA_ACTIVATE",
          parameters: null
        }
      }
    ]
  }
},
		{ //Google Assistant
  module: "MMM-GoogleAssistant",
  position: "top_left",
  configDeepMerge: true,
  config: {
    debug: true,
    assistantConfig: {
      lang: "en-US",
      latitude: 51.508530,
      longitude: -0.076132
    },
    micConfig: {
      recorder: "arecord",
      device: "default"
    },
    Extented: {
      useEXT: true,
      stopCommand: "Thank you",
	youtube: {
        useYoutube: true,
        useVLC: true,
      },      
	links: {
        useLinks: true,
        scrollActivate: true,
      },
	photos: {
        usePhotos: false,
        useGooglePhotosAPI: true,
        displayType: "Module",
        hiResolution: true,
      },
	volume: {
        useVolume: true,
        volumePreset: "ALSA_HDMI",
        myScript: null
      },
      cast: {
        useCast: true,
      },
      spotify: {
        useSpotify: true,
        visual: {
          useBottomBar: true,
			CLIENT_ID: "efb364406ae2425a9d9dc77d1f1326fc",
			CLIENT_SECRET: "3608521f27374209920a0b48ed08c4aa"
        },
        player: {
          type: "Raspotify",
			email: "almirarajwani@tamu.edu",
			password: "Bubbles123#",
        },
      },
    },
    recipes: ["ExtSpotify.js"],
    NPMCheck: {}
  }
},
		{ //telegrambot
  module: 'MMM-TelegramBot',
  config: {
    telegramAPIKey : '1763728406:AAEIPI4EO9D0cti2iYztLDEaYikjEvxOTY8',
    allowedUser : ['Aarishrajwani1'], // This is NOT the username of bot.
        adminChatId : 941231059,

  }
},

		{ //Dadjokes
            module: 'MMM-Dad-Jokes',
            position: 'lower_third', // Or wherever you want
            config: {
                updateInterval: 60000,
                fadeSpeed: 4000
            }
        },
{
  module: 'MMM-Tools',
  position: 'bottom_right',
  config: {
    refresh: 1000 * 5,
    containerSize: null,
    itemSize: null,
    OS: {
      displayOs: false,
      orderOs: 1
    },
    CPU: {
      displayUsage: false,
      orderUsage: 4,
      displayTemp: true,
      orderTemp: 7,
      displayType: false,
      orderType: 2
    },
    RAM: {
      displayRam: false,
      orderRam: 5
    },
    STORAGE: {
      displayStorage: false,
      orderStorage: 6,
      partitionExclude : []
    },
    NETWORK: {
      displayNetwork: false,
      orderNetwork: 3,
      nativeNetwork: false,
      displayDefaultNetwork: true
    },
    UPTIME: {
      displayUptime: false,
      useMagicMirror: true,
      orderUptime: 8,
      displayRecord: false,
      orderRecord: 9
    },
    WARNING: {
      enableWarning: true,
      interval: 1000 * 60 * 5,
      check : {
        CPU_TEMP : 75,
        CPU_USAGE : 75,
        STORAGE_USED : 80,
        MEMORY_USED : 80,
      }
    }
  }
},
        {
	disabled: false,
	module: "MMM-Selfieshot",
	config: {
		debug: false, // You can get more detailed log. If you have an issue, try to set this to true.
storePath: "./photos", // No need to modify.
width:1280,
height:720, // In some webcams, resolution ratio might be fixed so these values might not be applied.
quality: 100, //Of course.
device: null, // `null` for default camera. Or,
// device: "USB Camera" or "/video/video11" <-- See the backend log to get your installed camera name.
shootMessage: "Smile!",
shootCountdown: 5, // 5,4,3,2,1,0 then shutter.
displayCountdown: true,
displayResult: true,
playShutter: true,
shutterSound: "shutter.mp3",
useWebEndpoint: "selfie", // This will activate 'https://YOUR_MM_IP_OR_DOMAIN:PORT/selfie [POST]' as web API endpoint.
resultDuration: 1000 * 5,
sendTelegramBot: true,
sendMail: null, // or your email config (option for nodemailer https://nodemailer.com/about/)
},
}



	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
