export const json = {
    "title": "Car survey",
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "title": "Personal Information",
        "elements": [
          {
            "type": "text",
            "name": "first_name",
            "title": "First name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "last_name",
            "title": "Last name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "email",
            "title": "Email",
            "isRequired": true,
            "inputType": "email"
          },
          {
            "type": "text",
            "name": "phone",
            "title": "Phone",
            "inputType": "tel"
          }
        ]
      },
      {
        "name": "page2",
        "title": "Preferences",
        "elements": [
          {
            "type": "radiogroup",
            "name": "do_you_own_a_car",
            "title": "Do you own a car?",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Yes"
              },
              {
                "value": "Item 2",
                "text": "No"
              }
            ]
          },
          {
            "type": "dropdown",
            "name": "what_car_brand_do_you_own",
            "visibleIf": "{do_you_own_a_car} = 'Item 1'",
            "title": "What car brand do you own?",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Toyota"
              },
              {
                "value": "Item 2",
                "text": "BMW"
              },
              {
                "value": "Item 3",
                "text": "Honda"
              },
              {
                "value": "Item 4",
                "text": "Other"
              }
            ]
          },
          {
            "type": "text",
            "name": "how_many_km_per_month",
            "visibleIf": "{do_you_own_a_car} = 'Item 1'",
            "title": "How many kilometers do you drive per month?",
            "isRequired": true,
            "inputType": "number"
          },
          {
            "type": "radiogroup",
            "name": "do_you_travel_frequently",
            "visibleIf": "{do_you_own_a_car} = 'Item 1'",
            "title": "Do you travel frequently for work?",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Yes"
              },
              {
                "value": "Item 2",
                "text": "No"
              }
            ]
          },
          {
            "type": "checkbox",
            "name": "transportation_preference",
            "visibleIf": "{do_you_travel_frequently} = 'Item 1' and {do_you_own_a_car} = 'Item 1'",
            "title": "Which mode of transportation do you prefer?",
            "isRequired": true,
            "choices": [
              {
                "value": "Item 1",
                "text": "Flight"
              },
              {
                "value": "Item 2",
                "text": "Train"
              },
              {
                "value": "Item 3",
                "text": "Car"
              },
              {
                "value": "Item 4",
                "text": "Bus"
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "title": "Feedback",
        "elements": [
          {
            "type": "matrix",
            "name": "rating",
            "title": "Rate the following statements on a scale of 1-5",
            "isRequired": true,
            "columns": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "rows": [
              "The survey was easy to understand",
              "The form interface was intuitive",
              "The questions were relevant"
            ]
          },
          {
            "type": "file",
            "name": "file_upload",
            "title": "Upload a photo of your car or a travel ticket",
            "isRequired": false
          },
          {
            "type": "comment",
            "name": "question1",
            "title": "Do you have any additional feedback?"
          }
        ]
      }
    ]
  }