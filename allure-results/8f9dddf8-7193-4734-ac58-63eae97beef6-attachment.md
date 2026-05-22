# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenario1.spec.ts >> Scenario 1 - Outstation Cab Booking >> Test Case 2 - From To Location and Date Time Selection
- Location: tests\scenario1.spec.ts:18:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@onclick=\'Done(event)\']')
    - locator resolved to <div class="done_d" onclick="Done(event)"> Done </div>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - generic [ref=e5]:
      - link "easemytrip.com" [ref=e7] [cursor=pointer]:
        - /url: /
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "FLIGHTS" [ref=e13] [cursor=pointer]:
            - /url: https://www.easemytrip.com/flights.html
            - generic [ref=e15]: FLIGHTS
        - listitem [ref=e16]:
          - link "HOTELS" [ref=e17] [cursor=pointer]:
            - /url: https://www.easemytrip.com/hotels/
            - generic [ref=e19]: HOTELS
        - listitem [ref=e20]:
          - link "TRAINS" [ref=e21] [cursor=pointer]:
            - /url: https://www.easemytrip.com/railways/
            - generic [ref=e23]: TRAINS
        - listitem [ref=e24]:
          - link "BUS" [ref=e25] [cursor=pointer]:
            - /url: https://www.easemytrip.com/bus/
            - generic [ref=e27]: BUS
        - listitem [ref=e28]:
          - link "HOLIDAYS" [ref=e29] [cursor=pointer]:
            - /url: https://www.easemytrip.com/holidays/
            - generic [ref=e31]: HOLIDAYS
        - listitem [ref=e32]:
          - link "CABS" [ref=e33] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/
            - generic [ref=e35]: CABS
        - listitem [ref=e36]:
          - link "Activities" [ref=e37] [cursor=pointer]:
            - /url: https://www.easemytrip.com/activities/
            - generic [ref=e39]: Activities
        - listitem [ref=e40]:
          - link "Visa" [ref=e41] [cursor=pointer]:
            - /url: https://www.easemytrip.com/visa-booking/
            - generic [ref=e43]: Visa
        - listitem [ref=e44] [cursor=pointer]:
          - generic [ref=e47]: More
          - generic:
            - link "EaseMyTrip Cards Apply now to get Rewards" [ref=e48]:
              - /url: https://www.emtcards.in/
              - generic [ref=e50]:
                - generic [ref=e51]: EaseMyTrip Cards
                - generic [ref=e52]: Apply now to get Rewards
            - link "EasyEloped For Romantic Getaways" [ref=e53]:
              - /url: https://www.easyeloped.com
              - generic [ref=e55]:
                - generic [ref=e56]: EasyEloped
                - generic [ref=e57]: For Romantic Getaways
            - link "EasyDarshan Spiritual Tours in India" [ref=e58]:
              - /url: https://www.easydarshan.com
              - generic [ref=e60]:
                - generic [ref=e61]: EasyDarshan
                - generic [ref=e62]: Spiritual Tours in India
            - link "Airport Experience Enjoy airport service" [ref=e63]:
              - /url: https://www.easemytrip.com/airport-experience.html
              - generic [ref=e65]:
                - generic [ref=e66]: Airport Experience
                - generic [ref=e67]: Enjoy airport service
            - link "Gift Card Buy giftcards here" [ref=e68]:
              - /url: https://www.easemytrip.com/giftcard
              - generic [ref=e70]:
                - generic [ref=e71]: Gift Card
                - generic [ref=e72]: Buy giftcards here
            - link "EaseMy Check Best latest offers" [ref=e73]:
              - /url: https://www.easemytrip.com/deals.html
              - generic [ref=e75]:
                - generic [ref=e76]: EaseMy
                - generic [ref=e77]: Check Best latest offers
      - generic [ref=e78]:
        - generic [ref=e79]:
          - generic [ref=e81] [cursor=pointer]:
            - generic [ref=e83]: Customer Service
            - generic:
              - generic [ref=e87]:
                - generic [ref=e88]: Call Support
                - generic [ref=e89]: "Tel : 011 - 43131313, 43030303"
              - link "Mail Support Care@easemytrip.com" [ref=e90]:
                - /url: mailto:care@easemytrip.com
                - generic [ref=e92]:
                  - generic [ref=e93]: Mail Support
                  - generic [ref=e94]: Care@easemytrip.com
          - img "Toggle contrast mode" [ref=e97] [cursor=pointer]
        - generic [ref=e98] [cursor=pointer]:
          - generic [ref=e99]: Login or Signup
          - generic:
            - generic [ref=e102]:
              - generic [ref=e103]: Customer Login
              - generic [ref=e104]: Login & check bookings
            - link "Corporate Travel Login corporate account" [ref=e105]:
              - /url: https://www.easemytrip.com/corporate/
              - generic [ref=e107]:
                - generic [ref=e108]: Corporate Travel
                - generic [ref=e109]: Login corporate account
            - link "Agent Login Login your agent account" [ref=e110]:
              - /url: https://www.easemytrip.com/agents/
              - generic [ref=e112]:
                - generic [ref=e113]: Agent Login
                - generic [ref=e114]: Login your agent account
            - link "My Booking Manage your bookings here" [ref=e115]:
              - /url: https://mybookings.easemytrip.com/
              - generic [ref=e117]:
                - generic [ref=e118]: My Booking
                - generic [ref=e119]: Manage your bookings here
    - navigation [ref=e120]:
      - generic [ref=e121]:
        - generic [ref=e122] [cursor=pointer]: ✖
        - img "EMT logo" [ref=e124] [cursor=pointer]
      - list [ref=e125]:
        - listitem [ref=e126]:
          - link "Features" [ref=e127] [cursor=pointer]:
            - /url: "#"
            - text: Features
        - listitem [ref=e129]:
          - link "Services" [ref=e130] [cursor=pointer]:
            - /url: "#"
            - text: Services
        - listitem [ref=e132]:
          - link "Portfolio" [ref=e133] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e134]:
          - link "Overview" [ref=e135] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e136]:
          - link "Shortcuts" [ref=e137] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e138]:
          - link "Feedback" [ref=e139] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e140]:
    - generic [ref=e143]:
      - generic [ref=e144]:
        - list [ref=e146]:
          - listitem [ref=e147] [cursor=pointer]:
            - generic [ref=e148]: Airport Transfer
          - listitem [ref=e149] [cursor=pointer]:
            - generic [ref=e150]: Outstation
          - listitem [ref=e151] [cursor=pointer]:
            - generic [ref=e152]: Hourly
        - heading "Book Online Cab" [level=1] [ref=e153]
      - generic [ref=e155]:
        - generic [ref=e157] [cursor=pointer]:
          - generic [ref=e158]: From
          - generic [ref=e159]: Delhi
        - generic [ref=e160] [cursor=pointer]:
          - generic [ref=e162]:
            - generic [ref=e163]: To
            - generic [ref=e164]: Enter Drop Location
          - generic [ref=e165]:
            - textbox "To" [active] [ref=e168]: manali
            - list [ref=e170]:
              - listitem [ref=e171]:
                - generic [ref=e174]:
                  - generic [ref=e175]: manali
                  - generic [ref=e176]: kullu,himachal pradesh
              - listitem [ref=e177]:
                - generic [ref=e180]:
                  - generic [ref=e181]: manalapur
                  - generic [ref=e182]: dhamanagar,bhadrak,odisha
              - listitem [ref=e183]:
                - generic [ref=e186]:
                  - generic [ref=e187]: manali
                  - generic [ref=e188]: chennai,chennai,tamil nadu
              - listitem [ref=e189]:
                - generic [ref=e192]:
                  - generic [ref=e193]: manali
                  - generic [ref=e194]: gummidipoondi,thiruvallur,tamil nadu
              - listitem [ref=e195]:
                - generic [ref=e198]:
                  - generic [ref=e199]: manallur
                  - generic [ref=e200]: kilvelur,nagapattinam,tamil nadu
              - listitem [ref=e201]:
                - generic [ref=e204]:
                  - generic [ref=e205]: manali
                  - generic [ref=e206]: thiruthuraipoondi,thiruvarur,tamil nadu
              - listitem [ref=e207]:
                - generic [ref=e210]:
                  - generic [ref=e211]: manalur
                  - generic [ref=e212]: kilvelur,nagapattinam,tamil nadu
              - listitem [ref=e213]:
                - generic [ref=e216]:
                  - generic [ref=e217]: manalipet
                  - generic [ref=e218]: villianur,puducherry,puducherry
              - listitem [ref=e219]:
                - generic [ref=e222]:
                  - generic [ref=e223]: manalmedu
                  - generic [ref=e224]: mayiladuthurai,mayiladuthurai,tamil nadu
              - listitem [ref=e225]:
                - generic [ref=e228]:
                  - generic [ref=e229]: peria manali
                  - generic [ref=e230]: salem
              - listitem [ref=e231]:
                - generic [ref=e234]:
                  - generic [ref=e235]: manalurpet
                  - generic [ref=e236]: vellore
              - listitem [ref=e237]:
                - generic [ref=e240]:
                  - generic [ref=e241]: manalur
                  - generic [ref=e242]: tirunelveli
              - listitem [ref=e243]:
                - generic [ref=e246]:
                  - generic [ref=e247]: manalmedu
                  - generic [ref=e248]: thanjavur
              - listitem [ref=e249]:
                - generic [ref=e252]:
                  - generic [ref=e253]: manalikara
                  - generic [ref=e254]: kanyakumari
              - listitem [ref=e255]:
                - generic [ref=e258]:
                  - generic [ref=e259]: manali ttp
                  - generic [ref=e260]: thanjavur
              - listitem [ref=e261]:
                - generic [ref=e264]:
                  - generic [ref=e265]: manali new town
                  - generic [ref=e266]: tiruvallur
              - listitem [ref=e267]:
                - generic [ref=e270]:
                  - generic [ref=e271]: manali madras
                  - generic [ref=e272]: chennai
              - listitem [ref=e273]:
                - generic [ref=e276]:
                  - generic [ref=e277]: manali
                  - generic [ref=e278]: kullu
              - listitem [ref=e279]:
                - generic [ref=e282]:
                  - generic [ref=e283]: manalaya
                  - generic [ref=e284]: malapuram
        - generic [ref=e285]:
          - generic [ref=e286]:
            - generic [ref=e287] [cursor=pointer]: Pick-Up Date & Time
            - textbox "Select Date" [ref=e291] [cursor=pointer]: 16 May 2026
            - generic [ref=e292] [cursor=pointer]: 10:00 AM
          - generic [ref=e293]:
            - generic [ref=e294] [cursor=pointer]: Return Date & Time
            - paragraph [ref=e296] [cursor=pointer]:
              - text: Book a round trip
              - text: to save more
        - generic [ref=e297] [cursor=pointer]: SEARCH
    - link "bus Banner" [ref=e301] [cursor=pointer]:
      - /url: https://www.easemytrip.com/tourism/morocco/morocco.html?utm_source=tourism&utm_campaign=morocco
      - img "bus Banner" [ref=e302]
    - generic [ref=e303]:
      - generic [ref=e304]:
        - generic [ref=e307]: Exclusive Offers
        - generic [ref=e309]:
          - generic [ref=e310]:
            - group "1 / 13" [ref=e311]:
              - 'link "Deal of the Day Enjoy Offer Deal of the Day Enjoy Exciting Deals on Cab Bookings with EaseMyTrip Valid till : 30th Jun, 2026 EASEDAY Copy Code" [ref=e312] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-easeday.html
                - generic [ref=e313]:
                  - img "Deal of the Day" [ref=e314]
                  - generic [ref=e316]:
                    - generic [ref=e317]: Enjoy Offer
                    - generic [ref=e318]: Deal of the Day
                - generic [ref=e319]:
                  - generic [ref=e320]: Enjoy Exciting Deals on Cab Bookings with EaseMyTrip
                  - generic [ref=e321]:
                    - generic [ref=e322]: "Valid till : 30th Jun, 2026"
                    - generic [ref=e324]:
                      - generic [ref=e325]: EASEDAY
                      - img "Copy Code" [ref=e327]
            - group "2 / 13" [ref=e328]:
              - 'link "Hourly Rentals Grab 10% OFF* on Hourly Rentals Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip Valid till : 30th Jun 2026 EMTHOURLY Copy Code" [ref=e329] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/hourly-rental-cabs.html
                - generic [ref=e330]:
                  - img "Hourly Rentals" [ref=e331]
                  - generic [ref=e333]:
                    - generic [ref=e334]: Grab 10% OFF* on
                    - generic [ref=e335]: Hourly Rentals
                - generic [ref=e336]:
                  - generic [ref=e337]: Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip
                  - generic [ref=e338]:
                    - generic [ref=e339]: "Valid till : 30th Jun 2026"
                    - generic [ref=e341]:
                      - generic [ref=e342]: EMTHOURLY
                      - img "Copy Code" [ref=e344]
            - group "3 / 13" [ref=e345]:
              - 'link "Outstation Cabs Flat 10% OFF* on Outstation Cabs Get flat 10% OFF* on ride with outstation one way or round trip cab bookings Valid till : 30th Jun 2026 EMTCAB Copy Code" [ref=e346] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-deal.html
                - generic [ref=e347]:
                  - img "Outstation Cabs" [ref=e348]
                  - generic [ref=e350]:
                    - generic [ref=e351]: Flat 10% OFF* on
                    - generic [ref=e352]: Outstation Cabs
                - generic [ref=e353]:
                  - generic [ref=e354]: Get flat 10% OFF* on ride with outstation one way or round trip cab bookings
                  - generic [ref=e355]:
                    - generic [ref=e356]: "Valid till : 30th Jun 2026"
                    - generic [ref=e358]:
                      - generic [ref=e359]: EMTCAB
                      - img "Copy Code" [ref=e361]
            - group "4 / 13" [ref=e362]:
              - 'link "Airport Transfers Get Special Offer on Airport Transfers Now book cabs for airport transfers and unlock special offers with us. Valid till : 30th Jun 2026" [ref=e363] [cursor=pointer]':
                - /url: https://www.easemytrip.com/cabs/airport-transfer/
                - generic [ref=e364]:
                  - img "Airport Transfers" [ref=e365]
                  - generic [ref=e367]:
                    - generic [ref=e368]: Get Special Offer on
                    - generic [ref=e369]: Airport Transfers
                - generic [ref=e370]:
                  - generic [ref=e371]: Now book cabs for airport transfers and unlock special offers with us.
                  - generic [ref=e373]: "Valid till : 30th Jun 2026"
            - group "5 / 13" [ref=e374]:
              - link "Pay Just 15% Now Now Travel Easily Pay Just 15% Now Rest at Drop-Off Enjoy Cab Booking by Paying 15% and Rest to Driver Book Now" [ref=e375] [cursor=pointer]:
                - /url: https://www.easemytrip.com/offers/partial-payment.html
                - generic [ref=e376]:
                  - img "Pay Just 15% Now" [ref=e377]
                  - generic [ref=e379]:
                    - generic [ref=e380]: Now Travel Easily
                    - generic [ref=e381]: Pay Just 15% Now
                    - generic [ref=e382]: Rest at Drop-Off
                - generic [ref=e383]:
                  - generic [ref=e384]: Enjoy Cab Booking by Paying 15% and Rest to Driver
                  - generic [ref=e386]: Book Now
            - group "6 / 13" [ref=e387]:
              - 'link "Deal of the Day Enjoy Offer Deal of the Day Enjoy Exciting Deals on Cab Bookings with EaseMyTrip Valid till : 30th Jun, 2026 EASEDAY Copy Code" [ref=e388] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-easeday.html
                - generic [ref=e389]:
                  - img "Deal of the Day" [ref=e390]
                  - generic [ref=e392]:
                    - generic [ref=e393]: Enjoy Offer
                    - generic [ref=e394]: Deal of the Day
                - generic [ref=e395]:
                  - generic [ref=e396]: Enjoy Exciting Deals on Cab Bookings with EaseMyTrip
                  - generic [ref=e397]:
                    - generic [ref=e398]: "Valid till : 30th Jun, 2026"
                    - generic [ref=e400]:
                      - generic [ref=e401]: EASEDAY
                      - img "Copy Code" [ref=e403]
            - group "7 / 13" [ref=e404]:
              - 'link "Hourly Rentals Grab 10% OFF* on Hourly Rentals Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip Valid till : 30th Jun 2026 EMTHOURLY Copy Code" [ref=e405] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/hourly-rental-cabs.html
                - generic [ref=e406]:
                  - img "Hourly Rentals" [ref=e407]
                  - generic [ref=e409]:
                    - generic [ref=e410]: Grab 10% OFF* on
                    - generic [ref=e411]: Hourly Rentals
                - generic [ref=e412]:
                  - generic [ref=e413]: Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip
                  - generic [ref=e414]:
                    - generic [ref=e415]: "Valid till : 30th Jun 2026"
                    - generic [ref=e417]:
                      - generic [ref=e418]: EMTHOURLY
                      - img "Copy Code" [ref=e420]
            - group "8 / 13" [ref=e421]:
              - 'link "Outstation Cabs Flat 10% OFF* on Outstation Cabs Get flat 10% OFF* on ride with outstation one way or round trip cab bookings Valid till : 30th Jun 2026 EMTCAB Copy Code" [ref=e422] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-deal.html
                - generic [ref=e423]:
                  - img "Outstation Cabs" [ref=e424]
                  - generic [ref=e426]:
                    - generic [ref=e427]: Flat 10% OFF* on
                    - generic [ref=e428]: Outstation Cabs
                - generic [ref=e429]:
                  - generic [ref=e430]: Get flat 10% OFF* on ride with outstation one way or round trip cab bookings
                  - generic [ref=e431]:
                    - generic [ref=e432]: "Valid till : 30th Jun 2026"
                    - generic [ref=e434]:
                      - generic [ref=e435]: EMTCAB
                      - img "Copy Code" [ref=e437]
            - group "9 / 13" [ref=e438]:
              - 'link "Airport Transfers Get Special Offer on Airport Transfers Now book cabs for airport transfers and unlock special offers with us. Valid till : 30th Jun 2026" [ref=e439] [cursor=pointer]':
                - /url: https://www.easemytrip.com/cabs/airport-transfer/
                - generic [ref=e440]:
                  - img "Airport Transfers" [ref=e441]
                  - generic [ref=e443]:
                    - generic [ref=e444]: Get Special Offer on
                    - generic [ref=e445]: Airport Transfers
                - generic [ref=e446]:
                  - generic [ref=e447]: Now book cabs for airport transfers and unlock special offers with us.
                  - generic [ref=e449]: "Valid till : 30th Jun 2026"
            - group "10 / 13" [ref=e450]:
              - link "Pay Just 15% Now Now Travel Easily Pay Just 15% Now Rest at Drop-Off Enjoy Cab Booking by Paying 15% and Rest to Driver Book Now" [ref=e451] [cursor=pointer]:
                - /url: https://www.easemytrip.com/offers/partial-payment.html
                - generic [ref=e452]:
                  - img "Pay Just 15% Now" [ref=e453]
                  - generic [ref=e455]:
                    - generic [ref=e456]: Now Travel Easily
                    - generic [ref=e457]: Pay Just 15% Now
                    - generic [ref=e458]: Rest at Drop-Off
                - generic [ref=e459]:
                  - generic [ref=e460]: Enjoy Cab Booking by Paying 15% and Rest to Driver
                  - generic [ref=e462]: Book Now
            - group "11 / 13" [ref=e463]:
              - 'link "Deal of the Day Enjoy Offer Deal of the Day Enjoy Exciting Deals on Cab Bookings with EaseMyTrip Valid till : 30th Jun, 2026 EASEDAY Copy Code" [ref=e464] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-easeday.html
                - generic [ref=e465]:
                  - img "Deal of the Day" [ref=e466]
                  - generic [ref=e468]:
                    - generic [ref=e469]: Enjoy Offer
                    - generic [ref=e470]: Deal of the Day
                - generic [ref=e471]:
                  - generic [ref=e472]: Enjoy Exciting Deals on Cab Bookings with EaseMyTrip
                  - generic [ref=e473]:
                    - generic [ref=e474]: "Valid till : 30th Jun, 2026"
                    - generic [ref=e476]:
                      - generic [ref=e477]: EASEDAY
                      - img "Copy Code" [ref=e479]
            - group "12 / 13" [ref=e480]:
              - 'link "Hourly Rentals Grab 10% OFF* on Hourly Rentals Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip Valid till : 30th Jun 2026 EMTHOURLY Copy Code" [ref=e481] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/hourly-rental-cabs.html
                - generic [ref=e482]:
                  - img "Hourly Rentals" [ref=e483]
                  - generic [ref=e485]:
                    - generic [ref=e486]: Grab 10% OFF* on
                    - generic [ref=e487]: Hourly Rentals
                - generic [ref=e488]:
                  - generic [ref=e489]: Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip
                  - generic [ref=e490]:
                    - generic [ref=e491]: "Valid till : 30th Jun 2026"
                    - generic [ref=e493]:
                      - generic [ref=e494]: EMTHOURLY
                      - img "Copy Code" [ref=e496]
            - group "13 / 13" [ref=e497]:
              - 'link "Outstation Cabs Flat 10% OFF* on Outstation Cabs Get flat 10% OFF* on ride with outstation one way or round trip cab bookings Valid till : 30th Jun 2026 EMTCAB Copy Code" [ref=e498] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-deal.html
                - generic [ref=e499]:
                  - img "Outstation Cabs" [ref=e500]
                  - generic [ref=e502]:
                    - generic [ref=e503]: Flat 10% OFF* on
                    - generic [ref=e504]: Outstation Cabs
                - generic [ref=e505]:
                  - generic [ref=e506]: Get flat 10% OFF* on ride with outstation one way or round trip cab bookings
                  - generic [ref=e507]:
                    - generic [ref=e508]: "Valid till : 30th Jun 2026"
                    - generic [ref=e510]:
                      - generic [ref=e511]: EMTCAB
                      - img "Copy Code" [ref=e513]
          - button "Next slide" [ref=e514] [cursor=pointer]
          - button "Previous slide" [ref=e515] [cursor=pointer]
      - generic [ref=e518]:
        - generic [ref=e519]:
          - paragraph [ref=e520]: Upto 15% Discount
          - heading "City To City-Outstation Cabs" [level=2] [ref=e521]
          - paragraph [ref=e522]: Enjoy Best Price Guarantee, professional services, timely pick-up & drop-off and more!
        - link "Book Now" [ref=e524] [cursor=pointer]:
          - /url: https://www.easemytrip.com/cabs/outstation-cabs/
        - generic [ref=e525]:
          - generic [ref=e526]:
            - img "Delhi" [ref=e528]
            - generic [ref=e529]:
              - paragraph [ref=e530]: Delhi
              - generic [ref=e531]:
                - text: To-
                - link "Agra," [ref=e532] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/delhi-to-agra-cab-booking/
                - link "Bareilly," [ref=e533] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/delhi-to-bareilly-cab-booking/
                - link "Dehradun" [ref=e534] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/delhi-to-dehradun-cab-booking/
          - generic [ref=e535]:
            - img "Mumbai" [ref=e537]
            - generic [ref=e538]:
              - paragraph [ref=e539]: Mumbai
              - generic [ref=e540]:
                - text: To-
                - link "Shirdi," [ref=e541] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/navi-mumbai-to-shirdi-cab-booking/
                - link "Pune," [ref=e542] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/navi-mumbai-to-pune-cab-booking/
                - link "Lonavala" [ref=e543] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/navi-mumbai-to-lonavala-cab-booking/
          - generic [ref=e544]:
            - img "Chennai" [ref=e546]
            - generic [ref=e547]:
              - paragraph [ref=e548]: Chennai
              - generic [ref=e549]:
                - text: To-
                - link "Hosur," [ref=e550] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/chennai-to-hosur-cab-booking/
                - link "Tirupati ," [ref=e551] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/chennai-to-tirupati-cab-booking/
                - link "Bengaluru" [ref=e552] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/chennai-to-bengaluru-cab-booking/
          - generic [ref=e553]:
            - img "Bengaluru" [ref=e555]
            - generic [ref=e556]:
              - paragraph [ref=e557]: Bengaluru
              - generic [ref=e558]:
                - text: To-
                - link "Madikeri," [ref=e559] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/bengaluru-to-madikeri-cab-booking/
                - link "Tirupati," [ref=e560] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/bengaluru-to-tirupati-cab-booking/
                - link "Ooty" [ref=e561] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/bengaluru-to-ooty-cab-booking/
          - generic [ref=e562]:
            - img "Agra" [ref=e564]
            - generic [ref=e565]:
              - paragraph [ref=e566]: Agra
              - generic [ref=e567]:
                - text: To-
                - link "Delhi," [ref=e568] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/agra-to-delhi-cab-booking/
                - link "Lucknow," [ref=e569] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/agra-to-lucknow-cab-booking/
                - link "Jaipur" [ref=e570] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/agra-to-jaipur-cab-booking/
          - generic [ref=e571]:
            - img "rishikesh" [ref=e573]
            - generic [ref=e574]:
              - paragraph [ref=e575]: Rishikesh
              - generic [ref=e576]:
                - text: To-
                - link "Delhi," [ref=e577] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/rishikesh-to-delhi-cab-booking/
                - link "Haridwar," [ref=e578] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/rishikesh-to-haridwar-cab-booking/
                - link "Nainital" [ref=e579] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/rishikesh-to-nainital-cab-booking/
      - generic [ref=e583]:
        - generic [ref=e584]:
          - paragraph [ref=e585]: Upto 10% Discount
          - heading "Domestic Airport Transfer" [level=2] [ref=e586]
          - paragraph [ref=e587]: Book your guaranteed airport transfer now and enjoy peace of mind with our double refund promise!
          - link "Book Now" [ref=e589] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/airport-transfer/
        - generic [ref=e590]:
          - link "Pune Pune Airport Transfer" [ref=e592] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-pune-airport/
            - img "Pune" [ref=e594]
            - paragraph [ref=e596]: Pune Airport Transfer
          - link "Chennai Chennai Airport Transfer" [ref=e598] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-chennai-airport/
            - img "Chennai" [ref=e600]
            - paragraph [ref=e602]: Chennai Airport Transfer
          - link "Hyderabad Hyderabad Airport Transfer" [ref=e604] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-hyderabad-airport/
            - img "Hyderabad" [ref=e606]
            - paragraph [ref=e608]: Hyderabad Airport Transfer
          - link "Delhi Delhi Airport Transfer" [ref=e610] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-delhi-airport/
            - img "Delhi" [ref=e612]
            - paragraph [ref=e614]: Delhi Airport Transfer
          - link "Goa Goa Airport Transfer" [ref=e616] [cursor=pointer]:
            - /url: " https://www.easemytrip.com/cabs/cabs-from-goa-airport/"
            - img "Goa" [ref=e618]
            - paragraph [ref=e620]: Goa Airport Transfer
          - link "Mumbai Mumbai Airport Transfer" [ref=e622] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-mumbai-airport/
            - img "Mumbai" [ref=e624]
            - paragraph [ref=e626]: Mumbai Airport Transfer
      - generic [ref=e628]:
        - generic [ref=e629]:
          - heading "Flexible Hourly Car Rentals in India" [level=2] [ref=e630]
          - paragraph [ref=e631]: Rent a car by the hour for convenient and affordable travel within major Indian cities. Enjoy the freedom to explore at your own pace.
        - generic [ref=e632]:
          - generic [ref=e634]:
            - generic [ref=e637]:
              - img "Delhi" [ref=e639]
              - generic [ref=e641]:
                - generic [ref=e642]:
                  - generic [ref=e643]:
                    - strong [ref=e644]: Delhi
                    - paragraph [ref=e645]: Delhi, India
                  - img "copy-clock" [ref=e648]
                - link "From ₹940 Book red-arrow" [ref=e650] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-delhi/
                  - generic [ref=e651]:
                    - paragraph [ref=e653]: From ₹940
                    - generic [ref=e655]:
                      - text: Book
                      - img "red-arrow" [ref=e656]
            - generic [ref=e659]:
              - img "Hyderabad-car" [ref=e661]
              - generic [ref=e663]:
                - generic [ref=e664]:
                  - generic [ref=e665]:
                    - strong [ref=e666]: Hyderabad
                    - paragraph [ref=e667]: Andhra Pradesh, India
                  - img "copy-clock" [ref=e670]
                - link "From ₹1,400 Book red-arrow" [ref=e672] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-hyderabad/
                  - generic [ref=e673]:
                    - paragraph [ref=e675]: From ₹1,400
                    - generic [ref=e677]:
                      - text: Book
                      - img "red-arrow" [ref=e678]
            - generic [ref=e681]:
              - img "Chennai-car" [ref=e683]
              - generic [ref=e685]:
                - generic [ref=e686]:
                  - generic [ref=e687]:
                    - strong [ref=e688]: Chennai
                    - paragraph [ref=e689]: Tamil Nadu, India
                  - img "copy-clock" [ref=e692]
                - link "From ₹1,500 Book red-arrow" [ref=e694] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-chennai/
                  - generic [ref=e695]:
                    - paragraph [ref=e697]: From ₹1,500
                    - generic [ref=e699]:
                      - text: Book
                      - img "red-arrow" [ref=e700]
            - generic [ref=e703]:
              - img "Bangaluru-car" [ref=e705]
              - generic [ref=e707]:
                - generic [ref=e708]:
                  - generic [ref=e709]:
                    - strong [ref=e710]: Bangaluru
                    - paragraph [ref=e711]: Karnataka, India
                  - img "copy-clock" [ref=e714]
                - link "From ₹1,200 Book red-arrow" [ref=e716] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-bengaluru/
                  - generic [ref=e717]:
                    - paragraph [ref=e719]: From ₹1,200
                    - generic [ref=e721]:
                      - text: Book
                      - img "red-arrow" [ref=e722]
            - generic [ref=e725]:
              - img "kolkata" [ref=e727]
              - generic [ref=e729]:
                - generic [ref=e730]:
                  - generic [ref=e731]:
                    - strong [ref=e732]: Kolkata
                    - paragraph [ref=e733]: Kolkata, India
                  - img "copy-clock" [ref=e736]
                - link "From ₹1,100 Book red-arrow" [ref=e738] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-kolkata/
                  - generic [ref=e739]:
                    - paragraph [ref=e741]: From ₹1,100
                    - generic [ref=e743]:
                      - text: Book
                      - img "red-arrow" [ref=e744]
            - generic [ref=e747]:
              - img "Ahmedabad-car" [ref=e749]
              - generic [ref=e751]:
                - generic [ref=e752]:
                  - generic [ref=e753]:
                    - strong [ref=e754]: Ahmedabad
                    - paragraph [ref=e755]: Ahmedabad, India
                  - img "copy-clock" [ref=e758]
                - link "From ₹1,250 Book red-arrow" [ref=e760] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-ahmedabad/
                  - generic [ref=e761]:
                    - paragraph [ref=e763]: From ₹1,250
                    - generic [ref=e765]:
                      - text: Book
                      - img "red-arrow" [ref=e766]
            - generic [ref=e769]:
              - img "jaipur-car" [ref=e771]
              - generic [ref=e773]:
                - generic [ref=e774]:
                  - generic [ref=e775]:
                    - strong [ref=e776]: Jaipur
                    - paragraph [ref=e777]: Jaipur, India
                  - img "copy-clock" [ref=e780]
                - link "From ₹1,000 Book red-arrow" [ref=e782] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-jaipur/
                  - generic [ref=e783]:
                    - paragraph [ref=e785]: From ₹1,000
                    - generic [ref=e787]:
                      - text: Book
                      - img "red-arrow" [ref=e788]
            - generic [ref=e791]:
              - img "varansi-car" [ref=e793]
              - generic [ref=e795]:
                - generic [ref=e796]:
                  - generic [ref=e797]:
                    - strong [ref=e798]: Varanasi
                    - paragraph [ref=e799]: Uttar Pradesh, India
                  - img "copy-clock" [ref=e802]
                - link "From ₹1,260 Book red-arrow" [ref=e804] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-varanasi/
                  - generic [ref=e805]:
                    - paragraph [ref=e807]: From ₹1,260
                    - generic [ref=e809]:
                      - text: Book
                      - img "red-arrow" [ref=e810]
          - generic:
            - button [ref=e811] [cursor=pointer]
            - button [ref=e812] [cursor=pointer]
      - generic [ref=e814]:
        - generic [ref=e815]:
          - heading "Seamless Overseas Airport Transfers" [level=2] [ref=e816]
          - paragraph [ref=e817]: Heading to an international destination? Pre-book your Overseas Airport Transfer and enjoy seamless rides from the airport to your hotel or any location in the city
        - generic [ref=e818]:
          - generic [ref=e820]:
            - link "landon London Airport Transfer" [ref=e823] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/london-heathrow-airport/
              - generic [ref=e824]:
                - img "landon" [ref=e826]
                - generic [ref=e828]: London Airport Transfer
            - link "Singapore Singapore Airport Transfer" [ref=e832] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/changi-international-airport/
              - img "Singapore" [ref=e834]
              - generic [ref=e836]: Singapore Airport Transfer
            - link "Dubai Dubai Airport Transfer" [ref=e840] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/dubai-airport/
              - img "Dubai" [ref=e842]
              - generic [ref=e844]: Dubai Airport Transfer
            - link "Bangkok Airport Bangkok Airport Transfer" [ref=e848] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/bangkok-suvarnabhumi-airport/
              - img "Bangkok Airport" [ref=e850]
              - generic [ref=e852]: Bangkok Airport Transfer
            - link "Abu Dhabi Abu Dhabi Ariport Transfer" [ref=e856] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/abu-dhabi-international-airport/
              - img "Abu Dhabi" [ref=e858]
              - generic [ref=e860]: Abu Dhabi Ariport Transfer
            - link "Kuala Lumpur Kuala Lumpur Airport Transfer" [ref=e864] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/kuala-lumpur-international-airport/
              - img "Kuala Lumpur" [ref=e866]
              - generic [ref=e868]: Kuala Lumpur Airport Transfer
            - link "Almaty Almaty Airport Transfer" [ref=e872] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/almaty-international-airport/
              - img "Almaty" [ref=e874]
              - generic [ref=e876]: Almaty Airport Transfer
            - link "Sharjah Sharjah Airport Transfer" [ref=e880] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/sharjah-international-airport
              - img "Sharjah" [ref=e882]
              - generic [ref=e884]: Sharjah Airport Transfer
            - link "Bali Bali Ngurah Rai Airport Transfer" [ref=e888] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/ngurah-rai-airport
              - img "Bali" [ref=e890]
              - generic [ref=e892]: Bali Ngurah Rai Airport Transfer
            - link "melbourne.t Melbourne Airport Transfer" [ref=e896] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/tullamarine-airport/
              - img "melbourne.t" [ref=e898]
              - generic [ref=e900]: Melbourne Airport Transfer
          - generic:
            - button [ref=e901] [cursor=pointer]
            - button [ref=e902] [cursor=pointer]
      - generic [ref=e904]:
        - heading "Benefits To Book Cab With Us" [level=2] [ref=e905]
        - generic [ref=e906]:
          - generic [ref=e907]:
            - img [ref=e909]
            - generic [ref=e910]:
              - paragraph [ref=e911]: 10,000+ Routes Covered
              - paragraph [ref=e912]: We ensure that you can travel to almost any city to city ride seamlessly across India.
          - generic [ref=e913]:
            - img [ref=e915]
            - generic [ref=e916]:
              - paragraph [ref=e917]: 150+ Countries Wordwide
              - paragraph [ref=e918]: No matter where you travel, EaseMyTrip provides reliable cab services globally.
          - generic [ref=e919]:
            - img [ref=e921]
            - generic [ref=e922]:
              - paragraph [ref=e923]: 100% Full Refund Policy
              - paragraph [ref=e924]: We offer free cancellation on cab bookings in select cases for your convenience.
          - generic [ref=e925]:
            - img [ref=e927]
            - generic [ref=e928]:
              - paragraph [ref=e929]: 24/7 Support
              - paragraph [ref=e930]: Our dedicated support team is available around the clock to assist you
      - generic [ref=e934]:
        - generic [ref=e935]:
          - generic [ref=e936]:
            - heading "Ride More, Pay Less! Save Up To 10% On Your Next Cab Booking." [level=2] [ref=e937]
            - paragraph [ref=e938]: Travel affordably with exclusive savings on all cab bookings.
            - paragraph [ref=e939]:
              - strong [ref=e940]: "Use Code : EMTCAB"
          - link "Book Now" [ref=e942] [cursor=pointer]:
            - /url: https://www.easemytrip.com/offers/cab-deal.html
        - img "blue-img" [ref=e944]
      - generic [ref=e947]:
        - heading "Hassle-Free Cab Booking with EaseMyTrip" [level=2] [ref=e948]
        - paragraph [ref=e949]: Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! EaseMyTrip is here to provide you with a seamless and convenient solution for all your cab booking needs. As a customer-centric company, we strive to deliver the best services to our travellers, ensuring a stress-free journey every time.
        - heading "Unmatched Variety of Cabs and Discounts" [level=3] [ref=e950]
        - paragraph [ref=e951]: At EaseMyTrip, we believe in providing our customers with a wide selection of cab options to cater to their diverse needs. Our extensive network consists of 4000+ cab operators through different vendors, ensuring you always have a reliable and comfortable mode of transportation available. Choose from a range of categories, including Hatchbacks, sedans, SUVs, and more, depending on your preferences and group size.
        - paragraph [ref=e952]: Moreover, we understand the value of saving money while traveling. That's why EaseMyTrip offers discounted rates on taxi services. By booking through our platform, you can enjoy cost-effective cab rides without compromising on quality and reliability.
        - link "Read More" [ref=e954] [cursor=pointer]:
          - /url: javascript:void(0)
      - generic [ref=e957]:
        - img [ref=e958]
        - generic [ref=e959]:
          - paragraph [ref=e960]: Hassle Free. 24X7 on-trip assistance
          - paragraph [ref=e961]:
            - img [ref=e963]
            - text: 011 - 43131313, 43030303
          - paragraph [ref=e964]:
            - img [ref=e966]
            - text: Care@easemytrip.com
      - generic [ref=e968]:
        - heading "Frequently Asked Questions" [level=3] [ref=e970]
        - generic [ref=e971]:
          - generic [ref=e973] [cursor=pointer]: How can I Book a Cab from EaseMyTrip?
          - generic [ref=e975] [cursor=pointer]: What Car Categories Do You Provide?
          - generic [ref=e977] [cursor=pointer]: Do you Offer Multiple Pickups Or Drops?
          - generic [ref=e979] [cursor=pointer]: Is There any Convenience Charge on Cab Bookings made via the Web/App?
          - generic [ref=e981] [cursor=pointer]: What should I Do If I have to Carry a Lot of Luggage during the Journey?
          - generic [ref=e983] [cursor=pointer]: How can I Find the Best Cab Booking Offers & Deals?
    - generic [ref=e985]:
      - heading "Popular Cab Services" [level=4] [ref=e986]
      - generic [ref=e987]:
        - button "Airport Taxi" [ref=e988] [cursor=pointer]
        - button "Hourly Car Rental" [ref=e989] [cursor=pointer]
        - button "Outstation Taxi" [ref=e990] [cursor=pointer]
        - button "Service Taxi" [ref=e991] [cursor=pointer]
      - generic [ref=e992]:
        - generic [ref=e993]:
          - link "Bengaluru" [ref=e995] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-bengaluru-airport/
            - generic [ref=e996]: Bengaluru
          - link "Delhi" [ref=e998] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-delhi-airport/
            - generic [ref=e999]: Delhi
          - link "Mumbai" [ref=e1001] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-mumbai-airport/
            - generic [ref=e1002]: Mumbai
          - link "Hyderabad" [ref=e1004] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-hyderabad-airport/
            - generic [ref=e1005]: Hyderabad
        - generic [ref=e1006]:
          - link "Chennai" [ref=e1008] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-chennai-airport/
            - generic [ref=e1009]: Chennai
          - link "Bhubaneswar" [ref=e1011] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-bhubaneswar-airport/
            - generic [ref=e1012]: Bhubaneswar
          - link "Goa" [ref=e1014] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-goa-airport/
            - generic [ref=e1015]: Goa
          - link "Pune" [ref=e1017] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-pune-airport/
            - generic [ref=e1018]: Pune
        - generic [ref=e1019]:
          - link "Cochin" [ref=e1021] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-cochin-airport/
            - generic [ref=e1022]: Cochin
          - link "Kolkata" [ref=e1024] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-kolkata-airport/
            - generic [ref=e1025]: Kolkata
          - link "Amritsar" [ref=e1027] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-amritsar-airport/
            - generic [ref=e1028]: Amritsar
          - link "Jaipur" [ref=e1030] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-jaipur-airport/
            - generic [ref=e1031]: Jaipur
  - generic [ref=e1033]:
    - generic [ref=e1036]:
      - generic [ref=e1037]:
        - list [ref=e1039]:
          - button "OUR OFFERINGS" [ref=e1040] [cursor=pointer]
          - button "QUICK LINKS" [ref=e1041] [cursor=pointer]
          - button "POPULAR DESTINATION" [ref=e1042] [cursor=pointer]
          - button "INTERNATIONAL DESTINATION" [ref=e1043] [cursor=pointer]
          - button "POPULAR AIRLINE" [ref=e1044] [cursor=pointer]
          - button "CONNECT WITH US" [ref=e1045] [cursor=pointer]
          - button "OFFERS" [ref=e1046] [cursor=pointer]
          - button "EMT INSIGHTS" [ref=e1047] [cursor=pointer]
          - button "MEDIA" [ref=e1048] [cursor=pointer]
          - link "INVESTOR RELATIONS" [ref=e1049] [cursor=pointer]:
            - /url: https://www.easemytrip.com/investor-relations.html
          - link "CURRENT OPENINGS" [ref=e1050] [cursor=pointer]:
            - /url: https://www.easemytrip.com/career.html
        - generic [ref=e1052]:
          - paragraph [ref=e1053]: Make your travel easy with a wide range of products and services.
          - list [ref=e1055]:
            - listitem [ref=e1056]:
              - link "Flight" [ref=e1057] [cursor=pointer]:
                - /url: https://www.easemytrip.com/flights/
            - listitem [ref=e1058]:
              - link "Hotels" [ref=e1059] [cursor=pointer]:
                - /url: https://www.easemytrip.com/hotels/
            - listitem [ref=e1060]:
              - link "Trains" [ref=e1061] [cursor=pointer]:
                - /url: https://www.easemytrip.com/railways/
            - listitem [ref=e1062]:
              - link "Holidays" [ref=e1063] [cursor=pointer]:
                - /url: https://www.easemytrip.com/holidays/
            - listitem [ref=e1064]:
              - link "Bus" [ref=e1065] [cursor=pointer]:
                - /url: https://www.easemytrip.com/bus/
            - listitem [ref=e1066]:
              - link "Flight Status" [ref=e1067] [cursor=pointer]:
                - /url: https://www.easemytrip.com/flights/flight-status/
            - listitem [ref=e1068]:
              - link "Cabs" [ref=e1069] [cursor=pointer]:
                - /url: https://www.easemytrip.com/cabs/
            - listitem [ref=e1070]:
              - link "Airlines" [ref=e1071] [cursor=pointer]:
                - /url: https://www.easemytrip.com/directory/airlines.html
            - listitem [ref=e1072]:
              - link "Airports" [ref=e1073] [cursor=pointer]:
                - /url: https://www.easemytrip.com/directory/airports-in-india.html
            - listitem [ref=e1074]:
              - link "Travel Guides" [ref=e1075] [cursor=pointer]:
                - /url: https://www.easemytrip.com/travel-guides.html
            - listitem [ref=e1076]:
              - link "Check PNR Status" [ref=e1077] [cursor=pointer]:
                - /url: https://www.easemytrip.com/railways/pnr-status/
            - listitem [ref=e1078]:
              - link "EMT PRO" [ref=e1079] [cursor=pointer]:
                - /url: https://www.easemytrip.com/emtpro
            - listitem [ref=e1080]:
              - link "Activities" [ref=e1081] [cursor=pointer]:
                - /url: https://www.easemytrip.com/activities/
            - listitem [ref=e1082]:
              - link "Travel Updates" [ref=e1083] [cursor=pointer]:
                - /url: https://www.easemytrip.com/travel-updates.html
            - listitem [ref=e1084]:
              - link "Corporate travel" [ref=e1085] [cursor=pointer]:
                - /url: https://www.easemytrip.com/corporate
            - listitem [ref=e1086]:
              - link "Blog" [ref=e1087] [cursor=pointer]:
                - /url: https://www.easemytrip.com/blog/
            - listitem [ref=e1088]:
              - link "Flight Check-in" [ref=e1089] [cursor=pointer]:
                - /url: https://www.easemytrip.com/flights/web-check-in/
            - listitem [ref=e1090]:
              - link "VIP Cabs" [ref=e1091] [cursor=pointer]:
                - /url: https://www.easemytrip.com/bookvipcabs.html
      - generic [ref=e1092]:
        - generic [ref=e1093]:
          - img "EaseMyTrip.com" [ref=e1095]
          - paragraph [ref=e1097]: EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines, hotel bookings for nearly 1 million hotels in India and abroad, cab booking with 4000+ cab operators, bus tickets with 2000+ bus operators, and railway tickets in India for all major cities.
        - generic [ref=e1098]:
          - generic [ref=e1099]: DOWNLOAD EASEMYTRIP APP
          - generic [ref=e1101]:
            - link "Download on Android" [ref=e1103] [cursor=pointer]:
              - /url: //play.google.com/store/apps/details?id=com.easemytrip.android
              - img "Download on Android" [ref=e1104]
            - link "Download on IOS" [ref=e1106] [cursor=pointer]:
              - /url: https://itunes.apple.com/in/app/easemytrip-flight-booking/id1053030595?mt=8
              - img "Download on IOS" [ref=e1107]
        - generic [ref=e1108]:
          - generic [ref=e1109]: SCAN QR CODE
          - img [ref=e1113]
    - generic [ref=e1114]:
      - generic [ref=e1115]: Copyright © 2026 EaseMyTrip
      - img [ref=e1117]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | /**
  5  |  * CabsPage
  6  |  * Encapsulates all selectors and actions for the EaseMyTrip Cabs page.
  7  |  * Used by Scenario 1 tests (Outstation tab, From/To, Date, Search, Filters).
  8  |  */
  9  | export class CabsPage extends BasePage {
  10 |   // --- Locators ---
  11 |   readonly outstationTab: Locator;
  12 |   readonly fromContainer: Locator;
  13 |   readonly fromInput: Locator;
  14 |   readonly toContainer: Locator;
  15 |   readonly toInput: Locator;
  16 |   readonly pickupCalendar: Locator;
  17 |   readonly datepickerDiv: Locator;
  18 |   readonly hoursList: Locator;
  19 |   readonly minutesList: Locator;
  20 |   readonly doneButton: Locator;
  21 |   readonly searchButton: Locator;
  22 |   readonly suvCheckbox: Locator;
  23 |   readonly cabFare: Locator;
  24 |   readonly autoSuggestion: Locator;
  25 | 
  26 |   constructor(page: Page) {
  27 |     super(page);
  28 | 
  29 |     this.outstationTab      = page.getByText('Outstation').first();
  30 |     this.fromContainer      = page.locator("//div[@id='hrlysrc']");
  31 |     this.fromInput          = page.getByPlaceholder('From').first();
  32 |     this.toContainer        = page.locator("//div[@id='to']").first();
  33 |     this.toInput            = page.getByPlaceholder('To').first();
  34 |     this.pickupCalendar     = page.locator("//div[@id='pickCalender']").first();
  35 |     this.datepickerDiv      = page.locator('#ui-datepicker-div');
  36 |     this.hoursList          = page.locator('#hr > ul > li:nth-child(1)');
  37 |     this.minutesList        = page.locator('#min > ul > li:nth-child(3)');
  38 |     this.doneButton         = page.locator("//div[@onclick='Done(event)']");
  39 |     this.searchButton       = page.locator("//div[@onclick='GetList()']");
  40 |     this.suvCheckbox        = page.locator('input#suv');
  41 |     this.cabFare            = page.locator('//div[@class="cabFare _f25 "]');
  42 |     this.autoSuggestion     = page.locator('//div[@class="auto_sugg_tttl"]').first();
  43 |   }
  44 | 
  45 |   // --- Actions ---
  46 | 
  47 |   async goto(): Promise<void> {
  48 |     await this.navigate('/cabs/');
  49 |     await this.waitForPageLoad();
  50 |   }
  51 | 
  52 |   async selectOutstationTab(): Promise<void> {
  53 |     await this.outstationTab.click();
  54 |   }
  55 | 
  56 |   async enterFromLocation(location: string): Promise<void> {
  57 |     await this.fromContainer.click();
  58 |     await this.fromInput.click();
  59 |     await this.fromInput.type(location);
  60 |     await this.autoSuggestion.click();
  61 |   }
  62 | 
  63 |   async enterToLocation(location: string): Promise<void> {
  64 |     await this.toContainer.click();
  65 |     await this.toInput.click();
  66 |     await this.toInput.type(location);
  67 |     await this.autoSuggestion.click();
  68 |   }
  69 | 
  70 |   async selectDate(day: string): Promise<void> {
  71 |     await this.pickupCalendar.click();
  72 |     await this.datepickerDiv.getByRole('link', { name: day, exact: true }).click();
  73 |     await this.hoursList.click();
  74 |     await this.minutesList.click();
> 75 |     await this.doneButton.click();
     |                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  76 |   }
  77 | 
  78 |   async clickSearch(): Promise<void> {
  79 |     await this.searchButton.click();
  80 |   }
  81 | 
  82 |   async applySuvFilter(): Promise<void> {
  83 |     await this.suvCheckbox.check();
  84 |   }
  85 | 
  86 |   async getCabFareText(): Promise<string | null> {
  87 |     return this.cabFare.textContent();
  88 |   }
  89 | }
  90 | 
```