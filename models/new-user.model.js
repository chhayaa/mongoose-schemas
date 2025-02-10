const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _ = require('lodash')

// Define the Marriage Details as a separate schema to use it as an array of objects
const marriageDetailsSchema = new Schema({
  spouseId: { // This is the new field to reference the newUser model (the spouse)
    type: mongoose.Schema.Types.ObjectId,
    ref: 'newUser', // This assumes your user model is named 'newUser'
    //default: null
  },
  maidenName: {
    type: String
    //default: null
  },
  marraigeDate: { // Note: Check the spelling, it should be 'marriageDate'
    type: Date
    //default: null
  },
  linkYourSpouse: {
    type: String
    //default: null
  },
  location_of_wedding: { // Consider using camelCase for consistency: locationOfWedding
    type: mongoose.Schema.Types.Mixed,
    //default: null
    // Include other fields as necessary
  },
  relationship : {
    type: String
  },
  MD_Flag_N: {
    type: Number
  },
  isAroundDateOfMarraige: {
    type: Boolean,
    default: false
  },
  domMediaIds: [                     //User marriage medias      
    { type: mongoose.Schema.Types.ObjectId, ref: 'usergallery' }
  ]
});

const newUser = new Schema(
  {
    cognitousername: {
      type: String,
      default: null
    },
    smsCount: { type: Number, default: 0 },
    updatedSmsCountDate: { type: Date, default: Date.now },
    deviceInfo: {
      timezone:{
        type:String,
        deafult:null
      },
      appVersion: {
        type: String,
        default: null
      },
      platForm: {
        type: String,

        default: null
      },

      osVersion: {
        type: String,

        default: null
      },

      model: {
        type: String,

        default: null
      },

      operatingSystem: {
        type: String,

        default: null
      },
      deviceToken: {
        type: String,

        default: null
      }
    },
    email: {
      type: String,
      trim: true
      // unique : true
    },
    countryISO:{
      type:String,
    },
    countryCode: {
      type: Number,
      trim: true
    },
    mobileNo: {
      type: Number,
      trim: true
      // default: null
    },

    BD_Flag: {
      type: Number
    },
    isAroundDOB: {
      type: Boolean,
      default: false
    },
    isAroundDOD: {
      type: Boolean,
      default: false
    },

    MD_Flag: {
      type: Number
    },
    aIStoryCount: {
      type: Number,
      trim: true,
      default: () => 0
    },
    updateaIStoryCountDate: {
      type: Date,
      default: null
    },
    DD_Flag: {
      type: Number
    },
    groupType: {
      groupType1: {
        type: String,
        default: 'PU'
      },
      groupType2: {
        type: Number,
        default: 3
      }
    },

    personalDetails: {
      name: {
        type: String,
        trim: true
        // required: true
      },
      middlename: {
        type: String,
        trim: true
      },
      lastname: {
        type: String,
        trim: true
        //  required: true
      },
      nickname: {
        type: String,
        trim: true,
        default: null
      },
      showNickname: {
        type: Boolean,
        default: false
      },
      gender: {
        type: String,
        default: null
      },
      relationStatus: {
        type: String,
        default: null
      },
      profilepic: {
        type: String,
        default: null
      },
      livingStatus: {
        type: String,
        default: null
      }
    },
    location: {
      currentlocation: {
        type: mongoose.Schema.Types.Mixed,
        default: null
        // place_id: String,
        // lat: Number,
        // lon: Number,
        // address: String,
        // district: String,
        // city: String,
        // state: String,
        // pincode: Number,
        // country: String,
        // country_code: String
      },
      currentLocationObject: {
        city: {
            type: String,
            default: null
        },
        stateRegion: {
            type: String,
            default: null
        },
        country: {
            type: String,
            default: null
        }
      },
      previous_locations: [
        {
          type: mongoose.Schema.Types.Mixed,
          default: null
          // place_id: String,
          // lat: Number,
          // lon: Number,
          // address: String,
          // district: String,
          // city: String,
          // state: String,
          // pincode: Number,
          // country: String,
          // country_code: String
        }
      ],
      placeOfBirth: {
        type: mongoose.Schema.Types.Mixed,
        default: null
        // place_id: String,
        // lat: Number,
        // lon: Number,
        // address: String,
        // district: String,
        // city: String,
        // state: String,
        // pincode: Number,
        // country: String,
        // country_code: String
      },
      placeOfDeath: {
        type: mongoose.Schema.Types.Mixed,
        default: null
        // place_id: String,
        // lat: Number,
        // lon: Number,
        // address: String,
        // district: String,
        // city: String,
        // state: String,
        // pincode: Number,
        // country: String,
        // country_code: String
      }
    },

    birthDetails: {
      dob: {
        type: Date,
        default: null
      },
      dod: {
        type: Date,
        default: null
      },
      dobMediaIds: [                         //User birth medias            
        { type: mongoose.Schema.Types.ObjectId, ref: 'usergallery' }
      ],
      dodMediaIds: [                         //User death medias      
        { type: mongoose.Schema.Types.ObjectId, ref: 'usergallery' }
      ]
    },
    // marriageDetails: {
    //   maidenName: {
    //     type: String,
    //     default: null
    //   },
    //   marraigeDate: {
    //     type: Date,
    //     default: null
    //   },
    //   linkYourSpouse: {
    //     type: String,
    //     default: null
    //   },
    //   location_of_wedding: {
    //     type: mongoose.Schema.Types.Mixed,
    //     default: null
    //     // place_id: String,
    //     // lat: Number,
    //     // lon: Number,
    //     // address: String,
    //     // district: String,
    //     // city: String,
    //     // state: String,
    //     // pincode: Number,
    //     // country: String,
    //     // country_code: String
    //   }
    // },
    marriageDetails: [marriageDetailsSchema], // Update this line to use the schema as an array
    medicalDetails: {
      bloodgroup: {
        type: String
      },
      chronic_condition: [
        {
          name: String
        }
      ],
      allergies: [
        {
          name: String
        }
      ],
      illnesses: [
        {
          name: String
        }
      ],
      preExistingConditions: [
        {
          name: String
        }
      ]
    },
    moreInfo: {
      community: {
        type: String,
        default: null
      },
      subcommunity: {
        type: String,
        default: null
      },
      religion: {
        type: String,
        default: null
      },
      motherTounge: {
        type: String,
        default: null
      },
      gothra: {
        type: String,
        default: null
      },
      deity: {
        type: String,
        default: null
      },
      priestName: {
        type: String,
        default: null
      },
      ancestorVillage: {
        type: String,
        default: null
      }
    },

    workDetails: [
      {
        isPresentlyWorking: {
          type: Boolean,
          default: false
        },
        company_name: {
          type: String,
          default: null
        },
        dateOfFrom: {
          type: Date
        },
        dateOfTo: {
          type: Date
        },
        company_role: {
          type: String,
          default: null
        },
        fromDate: {
          type: Date
        },
        toDate: {
          type: Date
        },
        address: {
          type: String
        },
        FD_Flag: {
          type: Number
        },
        isAroundWorkStartDate:{
type:Boolean,
default:false
        },
        TD_Flag: {
          type: Number
        },
        isAroundWorkEndDate:{
          type:Boolean,
          default:false
                  },
        location: {
          type: mongoose.Schema.Types.Mixed,
          default: null
          // place_id: String,
          // lat: Number,
          // lon: Number,
          // address: String,
          // district: String,
          // city: String,
          // state: String,
          // pincode: Number,
          // country: String,
          // country_code: String
        },
        dowMediaIds: [                          //User work medias      
          { type: mongoose.Schema.Types.ObjectId, ref: 'usergallery' }
        ]
      }
    ],

    educationDetails: {
      college: [
        {
          isPresentlyStudying: {
            type: Boolean,
            default: false
          },
          name: {
            type: String
          },
          address: {
            type: String
          },
          
          location: {
            type: mongoose.Schema.Types.Mixed,
            default: null
            // place_id: String,
            // lat: Number,
            // lon: Number,
            // address: String,
            // district: String,
            // city: String,
            // state: String,
            // pincode: Number,
            // country: String,
            // country_code: String
          },
          dateOfFrom: {
            type: Date
          },
          dateOfTo: {
            type: Date
          },
          fromDate: {
            type: Date
          },
          toDate: {
            type: Date
          },
          degree: {
            type: String
          },
          FD_Flag: {
            type: Number
          },
          isAroundEducationStartDate:{
            type:Boolean,
            default:false
                    },
          TD_Flag: {
            type: Number
          },
          isAroundEducationEndDate:{
            type:Boolean,
            default:false
            },
            docMediaIds: [                           //User collge medias      
              {
                type: mongoose.Schema.Types.ObjectId, ref: 'usergallery' }
              ]
        }
      ],
      //Not using
      school: [
        {
          isPresentlyStudying: {
            type: Boolean,
            default: false
          },
          name: {
            type: String
          },
          location: {
            place_id: String,
            lat: Number,
            lon: Number,
            address: String,
            district: String,
            city: String,
            state: String,
            pincode: Number,
            country: String,
            country_code: String
          },

          fromDate: {
            type: Date
          },
          toDate: {
            type: Date
          },
          degree: {
            type: String
          },
          FD_Flag: {
            type: Number
          },
          isAroundEducationStartDate:{
            type:Boolean,
            default:false
                    },
          TD_Flag: {
            type: Number
          },
          isAroundEducationEndDate:{
            type:Boolean,
            default:false
          },
          dosMediaIds: [                          //User school medias      
            { type: mongoose.Schema.Types.ObjectId, ref: 'usergallery' }
          ]
        }
      ]
    },
    sociallinks: [
      {
        account: String,
        link: String
      }
    ],

    other: [
      {
        account: String,
        link: String
      }
    ],
    signup: {
      hasEmail: {
        type: Boolean
      },
      hasMobile: {
        type: Boolean
      },
      hasGoogle: {
        type: Boolean
      },
      hasFacebook: {
        type: Boolean
      }
    },

    treeIdin: [{ type: mongoose.Schema.Types.ObjectId, ref: 'newtree' }],
    parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'newUser' }],
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'newUser' }],
    husbands: [{ type: mongoose.Schema.Types.ObjectId, ref: 'newUser' }],
    wifes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'newUser' }],
    siblings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'newUser' }],
    linkedGroup: [{ type: mongoose.Schema.Types.ObjectId, ref: 'group' }],
    cLink:[{
      linkId:[{type: mongoose.Schema.Types.ObjectId, ref: 'newUser' }],
      treeId: { type: mongoose.Schema.Types.ObjectId, ref: 'newUser' },
    }],
    isClone: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

newUser.index({ personalDetails: 1 })

const newUsers =mongoose.models.Users || mongoose.model('newUser', newUser)

newUsers.usersAtlasSearchStage = async (body) => {
  const searchQuery = _.trim(body?.name)
  const terms = searchQuery.split(' ')

  const searchStage = {
    $search: {
      index: 'deepSearch',
      compound: {
        should: [
          {
            text: {
              query: searchQuery,
              path: ['personalDetails.name', 'personalDetails.lastname'],
              score: {
                boost: { value: 10 }
              }
            }
          },
          ...terms
            .map((term, index) => [
              {
                autocomplete: {
                  query: term,
                  path: 'personalDetails.name',
                  score: {
                    boost: { value: index === 0 ? 5 : 2 }
                  }
                }
              },
              {
                autocomplete: {
                  query: term,
                  path: 'personalDetails.lastname',
                  score: {
                    boost: { value: index === 0 ? 3 : 4 }
                  }
                }
              }
            ])
            .flat()
        ]
      }
    }
  }

  const matchStage = {
    $match: {
      email: { $exists: true, $ne: null }
    }
  }

  // const sortStage = {
  //   $sort: { 'personalDetails.name': 1, 'personalDetails.lastname': 1 }
  // }

  return [searchStage, matchStage]
}

module.exports = newUsers
