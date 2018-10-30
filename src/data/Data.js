// function IsraelData(data) {
//   return {
//     'persons': {
//       'Tahi': {
//         'gender': {
//           '2018-01': data.gender
//         },
//         'pension_contributing_years': {
//           '2018-01': data.years_worked
//         },
//         'is_resident': {
//           '2018-01': true
//         },
//         'born_in_israel': {
//           '2018-01': true
//         },
//         'pension_eligibility_age': {
//           '2018-01': null
//         },
//         'eligible_for_pension': {
//           '2018-01': null
//         }
//       }
//     },
//     'households': {
//       'one': {
//         'parents': ['Tahi']
//       }
//     }
//   };
// }

// // retrieve keys, copy object and replace property values with results
// export default IsraelData;

var DATA = {
  'New Zealand': {
    'persons': {
      'Tahi': {
        'is_permanent_resident': {
          '2018-08': true
        },
        'total_number_of_years_lived_in_nz_since_age_20': {
          '2018-08': null
        },
        'total_number_of_years_lived_in_nz_since_age_50': {
          '2018-08': null
        },
        'super___eligibility_age': {
          '2018 -08': null
        }
      }
    },
    'titled_properties': {
      'house': {
        'others': ['Tahi']
      }
    },
    'families': {
      'family': {
        'others': ['Tahi']
      }
    }
  },
  'Israel': {
    'persons': {
      'Tahi': {
        'gender': {
          '2018-01': null
        },
        'pension_contributing_years': {
          '2018-01': null
        },
        'is_resident': {
          '2018-01': true
        },
        'born_in_israel': {
          '2018-01': true
        },
        'pension_eligibility_age': {
          '2018-01': null
        },
        'eligible_for_pension': {
          '2018-01': null
        }
      }
    },
    'households': {
      'one': {
        'parents': ['Tahi']
      }
    }
  },
  'Uruguay': {
    'persons': {
      'Tahi': {
        'gender': {
          '2018-01': null
        },
        'pension_contributing_years': {
          '2018-01': null
        },
        'is_resident': {
          '2018-01': true
        },
        'born_in_israel': {
          '2018-01': true
        },
        'pension_eligibility_age': {
          '2018-01': null
        },
        'eligible_for_pension': {
          '2018-01': null
        }
      }
    },
    'households': {
      'one': {
        'parents': ['Tahi']
      }
    }
  }
};

export default DATA;
