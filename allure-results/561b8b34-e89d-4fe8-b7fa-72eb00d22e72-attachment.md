# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: scenario1.spec.ts >> Scenario 1 - Outstation Cab Booking >> Test Case 3 - Search Filter and Price Display
- Location: tests\scenario1.spec.ts:20:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.type: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('From').first()
    - locator resolved to <input type="text" autofocus="" placeholder="From" autocomplete="off" id="a_FromSector_show" class="srctinput autoFlll" onkeyup="AddautosuggClassForSource()"/>
  - elementHandle.type("delhi")

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - generic [ref=e9] [cursor=pointer]:
          - generic [ref=e11]: Customer Service
          - generic:
            - generic [ref=e15]:
              - generic [ref=e16]: Call Support
              - generic [ref=e17]: "Tel : 011 - 43131313, 43030303"
            - link "Mail Support Care@easemytrip.com" [ref=e18]:
              - /url: mailto:care@easemytrip.com
              - generic [ref=e20]:
                - generic [ref=e21]: Mail Support
                - generic [ref=e22]: Care@easemytrip.com
        - img "Toggle contrast mode" [ref=e25] [cursor=pointer]
      - generic [ref=e26] [cursor=pointer]:
        - generic [ref=e27]: Login or Signup
        - generic:
          - generic [ref=e30]:
            - generic [ref=e31]: Customer Login
            - generic [ref=e32]: Login & check bookings
          - link "Corporate Travel Login corporate account" [ref=e33]:
            - /url: https://www.easemytrip.com/corporate/
            - generic [ref=e35]:
              - generic [ref=e36]: Corporate Travel
              - generic [ref=e37]: Login corporate account
          - link "Agent Login Login your agent account" [ref=e38]:
            - /url: https://www.easemytrip.com/agents/
            - generic [ref=e40]:
              - generic [ref=e41]: Agent Login
              - generic [ref=e42]: Login your agent account
          - link "My Booking Manage your bookings here" [ref=e43]:
            - /url: https://mybookings.easemytrip.com/
            - generic [ref=e45]:
              - generic [ref=e46]: My Booking
              - generic [ref=e47]: Manage your bookings here
    - navigation [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e50] [cursor=pointer]: ✖
        - img "EMT logo" [ref=e52] [cursor=pointer]
      - list [ref=e53]:
        - listitem [ref=e54]:
          - link "Features" [ref=e55] [cursor=pointer]:
            - /url: "#"
            - text: Features
        - listitem [ref=e57]:
          - link "Services" [ref=e58] [cursor=pointer]:
            - /url: "#"
            - text: Services
        - listitem [ref=e60]:
          - link "Portfolio" [ref=e61] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e62]:
          - link "Overview" [ref=e63] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e64]:
          - link "Shortcuts" [ref=e65] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e66]:
          - link "Feedback" [ref=e67] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e68]:
    - generic [ref=e71]:
      - generic [ref=e72]:
        - list [ref=e74]:
          - listitem [ref=e75] [cursor=pointer]:
            - generic [ref=e76]: Airport Transfer
          - listitem [ref=e77] [cursor=pointer]:
            - generic [ref=e78]: Outstation
          - listitem [ref=e79] [cursor=pointer]:
            - generic [ref=e80]: Hourly
        - heading "Book Online Cab" [level=1] [ref=e81]
      - generic [ref=e83]:
        - generic [ref=e84] [cursor=pointer]:
          - generic [ref=e85]:
            - generic [ref=e86]: From
            - generic [ref=e87]: Enter Pick-up Location
          - generic [ref=e88]:
            - textbox "From" [active] [ref=e91]
            - list [ref=e93]:
              - listitem [ref=e94]:
                - generic [ref=e95]:
                  - img "locality" [ref=e97]
                  - generic [ref=e98]: Region
                - generic [ref=e99]:
                  - generic [ref=e100]: delhi cantonment
                  - generic [ref=e101]: new delhi,new delhi,delhi
              - listitem [ref=e102]:
                - generic [ref=e103]:
                  - img "poi" [ref=e105]
                  - generic [ref=e106]: City
                - generic [ref=e107]:
                  - generic [ref=e108]: delhi darbar
                  - generic [ref=e109]: colaba causeway
              - listitem [ref=e110]:
                - generic [ref=e111]:
                  - img "locality" [ref=e113]
                  - generic [ref=e114]: School
                - generic [ref=e115]:
                  - generic [ref=e116]: delhi university area
                  - generic [ref=e117]: new delhi,central delhi,delhi
              - listitem [ref=e118]:
                - generic [ref=e119]:
                  - img "poi" [ref=e121]
                  - generic [ref=e122]: School
                - generic [ref=e123]:
                  - generic [ref=e124]: delhi public school - south
                  - generic [ref=e125]: 11th, k m , kanakpura road (behind metro)
              - listitem [ref=e126]:
                - generic [ref=e127]:
                  - img "poi" [ref=e129]
                  - generic [ref=e130]: School
                - generic [ref=e131]:
                  - generic [ref=e132]: delhi darbar
                  - generic [ref=e133]: shop no 4 & 5, shivshakti complex
        - generic [ref=e136] [cursor=pointer]:
          - generic [ref=e137]: To
          - generic [ref=e138]: Enter Drop Location
        - generic [ref=e139]:
          - generic [ref=e140]:
            - generic [ref=e141] [cursor=pointer]: Pick-Up Date & Time
            - textbox "Select Date" [ref=e145] [cursor=pointer]: 19 May 2026
            - generic [ref=e146] [cursor=pointer]: 10:00 AM
          - generic [ref=e147]:
            - generic [ref=e148] [cursor=pointer]: Return Date & Time
            - paragraph [ref=e150] [cursor=pointer]:
              - text: Book a round trip
              - text: to save more
        - generic [ref=e151] [cursor=pointer]: SEARCH
    - link "bus Banner" [ref=e155] [cursor=pointer]:
      - /url: https://www.easemytrip.com/tourism/morocco/morocco.html?utm_source=tourism&utm_campaign=morocco
      - img "bus Banner" [ref=e156]
    - generic [ref=e157]:
      - generic [ref=e158]:
        - generic [ref=e161]: Exclusive Offers
        - generic [ref=e163]:
          - generic [ref=e164]:
            - group "1 / 13" [ref=e165]:
              - 'link "Deal of the Day Enjoy Offer Deal of the Day Enjoy Exciting Deals on Cab Bookings with EaseMyTrip Valid till : 30th Jun, 2026 EASEDAY Copy Code" [ref=e166] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-easeday.html
                - generic [ref=e167]:
                  - img "Deal of the Day" [ref=e168]
                  - generic [ref=e170]:
                    - generic [ref=e171]: Enjoy Offer
                    - generic [ref=e172]: Deal of the Day
                - generic [ref=e173]:
                  - generic [ref=e174]: Enjoy Exciting Deals on Cab Bookings with EaseMyTrip
                  - generic [ref=e175]:
                    - generic [ref=e176]: "Valid till : 30th Jun, 2026"
                    - generic [ref=e178]:
                      - generic [ref=e179]: EASEDAY
                      - img "Copy Code" [ref=e181]
            - group "2 / 13" [ref=e182]:
              - 'link "Hourly Rentals Grab 10% OFF* on Hourly Rentals Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip Valid till : 30th Jun 2026 EMTHOURLY Copy Code" [ref=e183] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/hourly-rental-cabs.html
                - generic [ref=e184]:
                  - img "Hourly Rentals" [ref=e185]
                  - generic [ref=e187]:
                    - generic [ref=e188]: Grab 10% OFF* on
                    - generic [ref=e189]: Hourly Rentals
                - generic [ref=e190]:
                  - generic [ref=e191]: Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip
                  - generic [ref=e192]:
                    - generic [ref=e193]: "Valid till : 30th Jun 2026"
                    - generic [ref=e195]:
                      - generic [ref=e196]: EMTHOURLY
                      - img "Copy Code" [ref=e198]
            - group "3 / 13" [ref=e199]:
              - 'link "Outstation Cabs Flat 10% OFF* on Outstation Cabs Get flat 10% OFF* on ride with outstation one way or round trip cab bookings Valid till : 30th Jun 2026 EMTCAB Copy Code" [ref=e200] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-deal.html
                - generic [ref=e201]:
                  - img "Outstation Cabs" [ref=e202]
                  - generic [ref=e204]:
                    - generic [ref=e205]: Flat 10% OFF* on
                    - generic [ref=e206]: Outstation Cabs
                - generic [ref=e207]:
                  - generic [ref=e208]: Get flat 10% OFF* on ride with outstation one way or round trip cab bookings
                  - generic [ref=e209]:
                    - generic [ref=e210]: "Valid till : 30th Jun 2026"
                    - generic [ref=e212]:
                      - generic [ref=e213]: EMTCAB
                      - img "Copy Code" [ref=e215]
            - group "4 / 13" [ref=e216]:
              - 'link "Airport Transfers Get Special Offer on Airport Transfers Now book cabs for airport transfers and unlock special offers with us. Valid till : 30th Jun 2026" [ref=e217] [cursor=pointer]':
                - /url: https://www.easemytrip.com/cabs/airport-transfer/
                - generic [ref=e218]:
                  - img "Airport Transfers" [ref=e219]
                  - generic [ref=e221]:
                    - generic [ref=e222]: Get Special Offer on
                    - generic [ref=e223]: Airport Transfers
                - generic [ref=e224]:
                  - generic [ref=e225]: Now book cabs for airport transfers and unlock special offers with us.
                  - generic [ref=e227]: "Valid till : 30th Jun 2026"
            - group "5 / 13" [ref=e228]:
              - link "Pay Just 15% Now Now Travel Easily Pay Just 15% Now Rest at Drop-Off Enjoy Cab Booking by Paying 15% and Rest to Driver Book Now" [ref=e229] [cursor=pointer]:
                - /url: https://www.easemytrip.com/offers/partial-payment.html
                - generic [ref=e230]:
                  - img "Pay Just 15% Now" [ref=e231]
                  - generic [ref=e233]:
                    - generic [ref=e234]: Now Travel Easily
                    - generic [ref=e235]: Pay Just 15% Now
                    - generic [ref=e236]: Rest at Drop-Off
                - generic [ref=e237]:
                  - generic [ref=e238]: Enjoy Cab Booking by Paying 15% and Rest to Driver
                  - generic [ref=e240]: Book Now
            - group "6 / 13" [ref=e241]:
              - 'link "Deal of the Day Enjoy Offer Deal of the Day Enjoy Exciting Deals on Cab Bookings with EaseMyTrip Valid till : 30th Jun, 2026 EASEDAY Copy Code" [ref=e242] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-easeday.html
                - generic [ref=e243]:
                  - img "Deal of the Day" [ref=e244]
                  - generic [ref=e246]:
                    - generic [ref=e247]: Enjoy Offer
                    - generic [ref=e248]: Deal of the Day
                - generic [ref=e249]:
                  - generic [ref=e250]: Enjoy Exciting Deals on Cab Bookings with EaseMyTrip
                  - generic [ref=e251]:
                    - generic [ref=e252]: "Valid till : 30th Jun, 2026"
                    - generic [ref=e254]:
                      - generic [ref=e255]: EASEDAY
                      - img "Copy Code" [ref=e257]
            - group "7 / 13" [ref=e258]:
              - 'link "Hourly Rentals Grab 10% OFF* on Hourly Rentals Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip Valid till : 30th Jun 2026 EMTHOURLY Copy Code" [ref=e259] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/hourly-rental-cabs.html
                - generic [ref=e260]:
                  - img "Hourly Rentals" [ref=e261]
                  - generic [ref=e263]:
                    - generic [ref=e264]: Grab 10% OFF* on
                    - generic [ref=e265]: Hourly Rentals
                - generic [ref=e266]:
                  - generic [ref=e267]: Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip
                  - generic [ref=e268]:
                    - generic [ref=e269]: "Valid till : 30th Jun 2026"
                    - generic [ref=e271]:
                      - generic [ref=e272]: EMTHOURLY
                      - img "Copy Code" [ref=e274]
            - group "8 / 13" [ref=e275]:
              - 'link "Outstation Cabs Flat 10% OFF* on Outstation Cabs Get flat 10% OFF* on ride with outstation one way or round trip cab bookings Valid till : 30th Jun 2026 EMTCAB Copy Code" [ref=e276] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-deal.html
                - generic [ref=e277]:
                  - img "Outstation Cabs" [ref=e278]
                  - generic [ref=e280]:
                    - generic [ref=e281]: Flat 10% OFF* on
                    - generic [ref=e282]: Outstation Cabs
                - generic [ref=e283]:
                  - generic [ref=e284]: Get flat 10% OFF* on ride with outstation one way or round trip cab bookings
                  - generic [ref=e285]:
                    - generic [ref=e286]: "Valid till : 30th Jun 2026"
                    - generic [ref=e288]:
                      - generic [ref=e289]: EMTCAB
                      - img "Copy Code" [ref=e291]
            - group "9 / 13" [ref=e292]:
              - 'link "Airport Transfers Get Special Offer on Airport Transfers Now book cabs for airport transfers and unlock special offers with us. Valid till : 30th Jun 2026" [ref=e293] [cursor=pointer]':
                - /url: https://www.easemytrip.com/cabs/airport-transfer/
                - generic [ref=e294]:
                  - img "Airport Transfers" [ref=e295]
                  - generic [ref=e297]:
                    - generic [ref=e298]: Get Special Offer on
                    - generic [ref=e299]: Airport Transfers
                - generic [ref=e300]:
                  - generic [ref=e301]: Now book cabs for airport transfers and unlock special offers with us.
                  - generic [ref=e303]: "Valid till : 30th Jun 2026"
            - group "10 / 13" [ref=e304]:
              - link "Pay Just 15% Now Now Travel Easily Pay Just 15% Now Rest at Drop-Off Enjoy Cab Booking by Paying 15% and Rest to Driver Book Now" [ref=e305] [cursor=pointer]:
                - /url: https://www.easemytrip.com/offers/partial-payment.html
                - generic [ref=e306]:
                  - img "Pay Just 15% Now" [ref=e307]
                  - generic [ref=e309]:
                    - generic [ref=e310]: Now Travel Easily
                    - generic [ref=e311]: Pay Just 15% Now
                    - generic [ref=e312]: Rest at Drop-Off
                - generic [ref=e313]:
                  - generic [ref=e314]: Enjoy Cab Booking by Paying 15% and Rest to Driver
                  - generic [ref=e316]: Book Now
            - group "11 / 13" [ref=e317]:
              - 'link "Deal of the Day Enjoy Offer Deal of the Day Enjoy Exciting Deals on Cab Bookings with EaseMyTrip Valid till : 30th Jun, 2026 EASEDAY Copy Code" [ref=e318] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-easeday.html
                - generic [ref=e319]:
                  - img "Deal of the Day" [ref=e320]
                  - generic [ref=e322]:
                    - generic [ref=e323]: Enjoy Offer
                    - generic [ref=e324]: Deal of the Day
                - generic [ref=e325]:
                  - generic [ref=e326]: Enjoy Exciting Deals on Cab Bookings with EaseMyTrip
                  - generic [ref=e327]:
                    - generic [ref=e328]: "Valid till : 30th Jun, 2026"
                    - generic [ref=e330]:
                      - generic [ref=e331]: EASEDAY
                      - img "Copy Code" [ref=e333]
            - group "12 / 13" [ref=e334]:
              - 'link "Hourly Rentals Grab 10% OFF* on Hourly Rentals Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip Valid till : 30th Jun 2026 EMTHOURLY Copy Code" [ref=e335] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/hourly-rental-cabs.html
                - generic [ref=e336]:
                  - img "Hourly Rentals" [ref=e337]
                  - generic [ref=e339]:
                    - generic [ref=e340]: Grab 10% OFF* on
                    - generic [ref=e341]: Hourly Rentals
                - generic [ref=e342]:
                  - generic [ref=e343]: Get up to Rs. 900 OFF on Hourly Rental Cab Bookings with EaseMyTrip
                  - generic [ref=e344]:
                    - generic [ref=e345]: "Valid till : 30th Jun 2026"
                    - generic [ref=e347]:
                      - generic [ref=e348]: EMTHOURLY
                      - img "Copy Code" [ref=e350]
            - group "13 / 13" [ref=e351]:
              - 'link "Outstation Cabs Flat 10% OFF* on Outstation Cabs Get flat 10% OFF* on ride with outstation one way or round trip cab bookings Valid till : 30th Jun 2026 EMTCAB Copy Code" [ref=e352] [cursor=pointer]':
                - /url: https://www.easemytrip.com/offers/cab-deal.html
                - generic [ref=e353]:
                  - img "Outstation Cabs" [ref=e354]
                  - generic [ref=e356]:
                    - generic [ref=e357]: Flat 10% OFF* on
                    - generic [ref=e358]: Outstation Cabs
                - generic [ref=e359]:
                  - generic [ref=e360]: Get flat 10% OFF* on ride with outstation one way or round trip cab bookings
                  - generic [ref=e361]:
                    - generic [ref=e362]: "Valid till : 30th Jun 2026"
                    - generic [ref=e364]:
                      - generic [ref=e365]: EMTCAB
                      - img "Copy Code" [ref=e367]
          - button "Next slide" [ref=e368] [cursor=pointer]
          - button "Previous slide" [ref=e369] [cursor=pointer]
      - generic [ref=e372]:
        - generic [ref=e373]:
          - paragraph [ref=e374]: Upto 15% Discount
          - heading "City To City-Outstation Cabs" [level=2] [ref=e375]
          - paragraph [ref=e376]: Enjoy Best Price Guarantee, professional services, timely pick-up & drop-off and more!
        - link "Book Now" [ref=e378] [cursor=pointer]:
          - /url: https://www.easemytrip.com/cabs/outstation-cabs/
        - generic [ref=e379]:
          - generic [ref=e380]:
            - img "Delhi" [ref=e382]
            - generic [ref=e383]:
              - paragraph [ref=e384]: Delhi
              - generic [ref=e385]:
                - text: To-
                - link "Agra," [ref=e386] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/delhi-to-agra-cab-booking/
                - link "Bareilly," [ref=e387] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/delhi-to-bareilly-cab-booking/
                - link "Dehradun" [ref=e388] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/delhi-to-dehradun-cab-booking/
          - generic [ref=e389]:
            - img "Mumbai" [ref=e391]
            - generic [ref=e392]:
              - paragraph [ref=e393]: Mumbai
              - generic [ref=e394]:
                - text: To-
                - link "Shirdi," [ref=e395] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/navi-mumbai-to-shirdi-cab-booking/
                - link "Pune," [ref=e396] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/navi-mumbai-to-pune-cab-booking/
                - link "Lonavala" [ref=e397] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/navi-mumbai-to-lonavala-cab-booking/
          - generic [ref=e398]:
            - img "Chennai" [ref=e400]
            - generic [ref=e401]:
              - paragraph [ref=e402]: Chennai
              - generic [ref=e403]:
                - text: To-
                - link "Hosur," [ref=e404] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/chennai-to-hosur-cab-booking/
                - link "Tirupati ," [ref=e405] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/chennai-to-tirupati-cab-booking/
                - link "Bengaluru" [ref=e406] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/chennai-to-bengaluru-cab-booking/
          - generic [ref=e407]:
            - img "Bengaluru" [ref=e409]
            - generic [ref=e410]:
              - paragraph [ref=e411]: Bengaluru
              - generic [ref=e412]:
                - text: To-
                - link "Madikeri," [ref=e413] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/bengaluru-to-madikeri-cab-booking/
                - link "Tirupati," [ref=e414] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/bengaluru-to-tirupati-cab-booking/
                - link "Ooty" [ref=e415] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/bengaluru-to-ooty-cab-booking/
          - generic [ref=e416]:
            - img "Agra" [ref=e418]
            - generic [ref=e419]:
              - paragraph [ref=e420]: Agra
              - generic [ref=e421]:
                - text: To-
                - link "Delhi," [ref=e422] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/agra-to-delhi-cab-booking/
                - link "Lucknow," [ref=e423] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/agra-to-lucknow-cab-booking/
                - link "Jaipur" [ref=e424] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/agra-to-jaipur-cab-booking/
          - generic [ref=e425]:
            - img "rishikesh" [ref=e427]
            - generic [ref=e428]:
              - paragraph [ref=e429]: Rishikesh
              - generic [ref=e430]:
                - text: To-
                - link "Delhi," [ref=e431] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/rishikesh-to-delhi-cab-booking/
                - link "Haridwar," [ref=e432] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/rishikesh-to-haridwar-cab-booking/
                - link "Nainital" [ref=e433] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/rishikesh-to-nainital-cab-booking/
      - generic [ref=e437]:
        - generic [ref=e438]:
          - paragraph [ref=e439]: Upto 10% Discount
          - heading "Domestic Airport Transfer" [level=2] [ref=e440]
          - paragraph [ref=e441]: Book your guaranteed airport transfer now and enjoy peace of mind with our double refund promise!
          - link "Book Now" [ref=e443] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/airport-transfer/
        - generic [ref=e444]:
          - link "Pune Pune Airport Transfer" [ref=e446] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-pune-airport/
            - img "Pune" [ref=e448]
            - paragraph [ref=e450]: Pune Airport Transfer
          - link "Chennai Chennai Airport Transfer" [ref=e452] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-chennai-airport/
            - img "Chennai" [ref=e454]
            - paragraph [ref=e456]: Chennai Airport Transfer
          - link "Hyderabad Hyderabad Airport Transfer" [ref=e458] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-hyderabad-airport/
            - img "Hyderabad" [ref=e460]
            - paragraph [ref=e462]: Hyderabad Airport Transfer
          - link "Delhi Delhi Airport Transfer" [ref=e464] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-delhi-airport/
            - img "Delhi" [ref=e466]
            - paragraph [ref=e468]: Delhi Airport Transfer
          - link "Goa Goa Airport Transfer" [ref=e470] [cursor=pointer]:
            - /url: " https://www.easemytrip.com/cabs/cabs-from-goa-airport/"
            - img "Goa" [ref=e472]
            - paragraph [ref=e474]: Goa Airport Transfer
          - link "Mumbai Mumbai Airport Transfer" [ref=e476] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-mumbai-airport/
            - img "Mumbai" [ref=e478]
            - paragraph [ref=e480]: Mumbai Airport Transfer
      - generic [ref=e482]:
        - generic [ref=e483]:
          - heading "Flexible Hourly Car Rentals in India" [level=2] [ref=e484]
          - paragraph [ref=e485]: Rent a car by the hour for convenient and affordable travel within major Indian cities. Enjoy the freedom to explore at your own pace.
        - generic [ref=e486]:
          - generic [ref=e488]:
            - generic [ref=e491]:
              - img "Delhi" [ref=e493]
              - generic [ref=e495]:
                - generic [ref=e496]:
                  - generic [ref=e497]:
                    - strong [ref=e498]: Delhi
                    - paragraph [ref=e499]: Delhi, India
                  - img "copy-clock" [ref=e502]
                - link "From ₹940 Book red-arrow" [ref=e504] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-delhi/
                  - generic [ref=e505]:
                    - paragraph [ref=e507]: From ₹940
                    - generic [ref=e509]:
                      - text: Book
                      - img "red-arrow" [ref=e510]
            - generic [ref=e513]:
              - img "Hyderabad-car" [ref=e515]
              - generic [ref=e517]:
                - generic [ref=e518]:
                  - generic [ref=e519]:
                    - strong [ref=e520]: Hyderabad
                    - paragraph [ref=e521]: Andhra Pradesh, India
                  - img "copy-clock" [ref=e524]
                - link "From ₹1,400 Book red-arrow" [ref=e526] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-hyderabad/
                  - generic [ref=e527]:
                    - paragraph [ref=e529]: From ₹1,400
                    - generic [ref=e531]:
                      - text: Book
                      - img "red-arrow" [ref=e532]
            - generic [ref=e535]:
              - img "Chennai-car" [ref=e537]
              - generic [ref=e539]:
                - generic [ref=e540]:
                  - generic [ref=e541]:
                    - strong [ref=e542]: Chennai
                    - paragraph [ref=e543]: Tamil Nadu, India
                  - img "copy-clock" [ref=e546]
                - link "From ₹1,500 Book red-arrow" [ref=e548] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-chennai/
                  - generic [ref=e549]:
                    - paragraph [ref=e551]: From ₹1,500
                    - generic [ref=e553]:
                      - text: Book
                      - img "red-arrow" [ref=e554]
            - generic [ref=e557]:
              - img "Bangaluru-car" [ref=e559]
              - generic [ref=e561]:
                - generic [ref=e562]:
                  - generic [ref=e563]:
                    - strong [ref=e564]: Bangaluru
                    - paragraph [ref=e565]: Karnataka, India
                  - img "copy-clock" [ref=e568]
                - link "From ₹1,200 Book red-arrow" [ref=e570] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-bengaluru/
                  - generic [ref=e571]:
                    - paragraph [ref=e573]: From ₹1,200
                    - generic [ref=e575]:
                      - text: Book
                      - img "red-arrow" [ref=e576]
            - generic [ref=e579]:
              - img "kolkata" [ref=e581]
              - generic [ref=e583]:
                - generic [ref=e584]:
                  - generic [ref=e585]:
                    - strong [ref=e586]: Kolkata
                    - paragraph [ref=e587]: Kolkata, India
                  - img "copy-clock" [ref=e590]
                - link "From ₹1,100 Book red-arrow" [ref=e592] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-kolkata/
                  - generic [ref=e593]:
                    - paragraph [ref=e595]: From ₹1,100
                    - generic [ref=e597]:
                      - text: Book
                      - img "red-arrow" [ref=e598]
            - generic [ref=e601]:
              - img "Ahmedabad-car" [ref=e603]
              - generic [ref=e605]:
                - generic [ref=e606]:
                  - generic [ref=e607]:
                    - strong [ref=e608]: Ahmedabad
                    - paragraph [ref=e609]: Ahmedabad, India
                  - img "copy-clock" [ref=e612]
                - link "From ₹1,250 Book red-arrow" [ref=e614] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-ahmedabad/
                  - generic [ref=e615]:
                    - paragraph [ref=e617]: From ₹1,250
                    - generic [ref=e619]:
                      - text: Book
                      - img "red-arrow" [ref=e620]
            - generic [ref=e623]:
              - img "jaipur-car" [ref=e625]
              - generic [ref=e627]:
                - generic [ref=e628]:
                  - generic [ref=e629]:
                    - strong [ref=e630]: Jaipur
                    - paragraph [ref=e631]: Jaipur, India
                  - img "copy-clock" [ref=e634]
                - link "From ₹1,000 Book red-arrow" [ref=e636] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-jaipur/
                  - generic [ref=e637]:
                    - paragraph [ref=e639]: From ₹1,000
                    - generic [ref=e641]:
                      - text: Book
                      - img "red-arrow" [ref=e642]
            - generic [ref=e645]:
              - img "varansi-car" [ref=e647]
              - generic [ref=e649]:
                - generic [ref=e650]:
                  - generic [ref=e651]:
                    - strong [ref=e652]: Varanasi
                    - paragraph [ref=e653]: Uttar Pradesh, India
                  - img "copy-clock" [ref=e656]
                - link "From ₹1,260 Book red-arrow" [ref=e658] [cursor=pointer]:
                  - /url: https://www.easemytrip.com/cabs/car-rental-varanasi/
                  - generic [ref=e659]:
                    - paragraph [ref=e661]: From ₹1,260
                    - generic [ref=e663]:
                      - text: Book
                      - img "red-arrow" [ref=e664]
          - generic:
            - button [ref=e665] [cursor=pointer]
            - button [ref=e666] [cursor=pointer]
      - generic [ref=e668]:
        - generic [ref=e669]:
          - heading "Seamless Overseas Airport Transfers" [level=2] [ref=e670]
          - paragraph [ref=e671]: Heading to an international destination? Pre-book your Overseas Airport Transfer and enjoy seamless rides from the airport to your hotel or any location in the city
        - generic [ref=e672]:
          - generic [ref=e674]:
            - link "landon London Airport Transfer" [ref=e677] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/london-heathrow-airport/
              - generic [ref=e678]:
                - img "landon" [ref=e680]
                - generic [ref=e682]: London Airport Transfer
            - link "Singapore Singapore Airport Transfer" [ref=e686] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/changi-international-airport/
              - img "Singapore" [ref=e688]
              - generic [ref=e690]: Singapore Airport Transfer
            - link "Dubai Dubai Airport Transfer" [ref=e694] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/dubai-airport/
              - img "Dubai" [ref=e696]
              - generic [ref=e698]: Dubai Airport Transfer
            - link "Bangkok Airport Bangkok Airport Transfer" [ref=e702] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/bangkok-suvarnabhumi-airport/
              - img "Bangkok Airport" [ref=e704]
              - generic [ref=e706]: Bangkok Airport Transfer
            - link "Abu Dhabi Abu Dhabi Ariport Transfer" [ref=e710] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/abu-dhabi-international-airport/
              - img "Abu Dhabi" [ref=e712]
              - generic [ref=e714]: Abu Dhabi Ariport Transfer
            - link "Kuala Lumpur Kuala Lumpur Airport Transfer" [ref=e718] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/kuala-lumpur-international-airport/
              - img "Kuala Lumpur" [ref=e720]
              - generic [ref=e722]: Kuala Lumpur Airport Transfer
            - link "Almaty Almaty Airport Transfer" [ref=e726] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/almaty-international-airport/
              - img "Almaty" [ref=e728]
              - generic [ref=e730]: Almaty Airport Transfer
            - link "Sharjah Sharjah Airport Transfer" [ref=e734] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/sharjah-international-airport
              - img "Sharjah" [ref=e736]
              - generic [ref=e738]: Sharjah Airport Transfer
            - link "Bali Bali Ngurah Rai Airport Transfer" [ref=e742] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/ngurah-rai-airport
              - img "Bali" [ref=e744]
              - generic [ref=e746]: Bali Ngurah Rai Airport Transfer
            - link "melbourne.t Melbourne Airport Transfer" [ref=e750] [cursor=pointer]:
              - /url: https://www.easemytrip.com/cabs/overseas-airport-transfers/tullamarine-airport/
              - img "melbourne.t" [ref=e752]
              - generic [ref=e754]: Melbourne Airport Transfer
          - generic:
            - button [ref=e755] [cursor=pointer]
            - button [ref=e756] [cursor=pointer]
      - generic [ref=e758]:
        - heading "Benefits To Book Cab With Us" [level=2] [ref=e759]
        - generic [ref=e760]:
          - generic [ref=e761]:
            - img [ref=e763]
            - generic [ref=e764]:
              - paragraph [ref=e765]: 10,000+ Routes Covered
              - paragraph [ref=e766]: We ensure that you can travel to almost any city to city ride seamlessly across India.
          - generic [ref=e767]:
            - img [ref=e769]
            - generic [ref=e770]:
              - paragraph [ref=e771]: 150+ Countries Wordwide
              - paragraph [ref=e772]: No matter where you travel, EaseMyTrip provides reliable cab services globally.
          - generic [ref=e773]:
            - img [ref=e775]
            - generic [ref=e776]:
              - paragraph [ref=e777]: 100% Full Refund Policy
              - paragraph [ref=e778]: We offer free cancellation on cab bookings in select cases for your convenience.
          - generic [ref=e779]:
            - img [ref=e781]
            - generic [ref=e782]:
              - paragraph [ref=e783]: 24/7 Support
              - paragraph [ref=e784]: Our dedicated support team is available around the clock to assist you
      - generic [ref=e788]:
        - generic [ref=e789]:
          - generic [ref=e790]:
            - heading "Ride More, Pay Less! Save Up To 10% On Your Next Cab Booking." [level=2] [ref=e791]
            - paragraph [ref=e792]: Travel affordably with exclusive savings on all cab bookings.
            - paragraph [ref=e793]:
              - strong [ref=e794]: "Use Code : EMTCAB"
          - link "Book Now" [ref=e796] [cursor=pointer]:
            - /url: https://www.easemytrip.com/offers/cab-deal.html
        - img "blue-img" [ref=e798]
      - generic [ref=e801]:
        - heading "Hassle-Free Cab Booking with EaseMyTrip" [level=2] [ref=e802]
        - paragraph [ref=e803]: Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! EaseMyTrip is here to provide you with a seamless and convenient solution for all your cab booking needs. As a customer-centric company, we strive to deliver the best services to our travellers, ensuring a stress-free journey every time.
        - heading "Unmatched Variety of Cabs and Discounts" [level=3] [ref=e804]
        - paragraph [ref=e805]: At EaseMyTrip, we believe in providing our customers with a wide selection of cab options to cater to their diverse needs. Our extensive network consists of 4000+ cab operators through different vendors, ensuring you always have a reliable and comfortable mode of transportation available. Choose from a range of categories, including Hatchbacks, sedans, SUVs, and more, depending on your preferences and group size.
        - paragraph [ref=e806]: Moreover, we understand the value of saving money while traveling. That's why EaseMyTrip offers discounted rates on taxi services. By booking through our platform, you can enjoy cost-effective cab rides without compromising on quality and reliability.
        - link "Read More" [ref=e808] [cursor=pointer]:
          - /url: javascript:void(0)
      - generic [ref=e811]:
        - img [ref=e812]
        - generic [ref=e813]:
          - paragraph [ref=e814]: Hassle Free. 24X7 on-trip assistance
          - paragraph [ref=e815]:
            - img [ref=e817]
            - text: 011 - 43131313, 43030303
          - paragraph [ref=e818]:
            - img [ref=e820]
            - text: Care@easemytrip.com
      - generic [ref=e822]:
        - heading "Frequently Asked Questions" [level=3] [ref=e824]
        - generic [ref=e825]:
          - generic [ref=e827] [cursor=pointer]: How can I Book a Cab from EaseMyTrip?
          - generic [ref=e829] [cursor=pointer]: What Car Categories Do You Provide?
          - generic [ref=e831] [cursor=pointer]: Do you Offer Multiple Pickups Or Drops?
          - generic [ref=e833] [cursor=pointer]: Is There any Convenience Charge on Cab Bookings made via the Web/App?
          - generic [ref=e835] [cursor=pointer]: What should I Do If I have to Carry a Lot of Luggage during the Journey?
          - generic [ref=e837] [cursor=pointer]: How can I Find the Best Cab Booking Offers & Deals?
    - generic [ref=e839]:
      - heading "Popular Cab Services" [level=4] [ref=e840]
      - generic [ref=e841]:
        - button "Airport Taxi" [ref=e842] [cursor=pointer]
        - button "Hourly Car Rental" [ref=e843] [cursor=pointer]
        - button "Outstation Taxi" [ref=e844] [cursor=pointer]
        - button "Service Taxi" [ref=e845] [cursor=pointer]
      - generic [ref=e846]:
        - generic [ref=e847]:
          - link "Bengaluru" [ref=e849] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-bengaluru-airport/
            - generic [ref=e850]: Bengaluru
          - link "Delhi" [ref=e852] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-delhi-airport/
            - generic [ref=e853]: Delhi
          - link "Mumbai" [ref=e855] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-mumbai-airport/
            - generic [ref=e856]: Mumbai
          - link "Hyderabad" [ref=e858] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-hyderabad-airport/
            - generic [ref=e859]: Hyderabad
        - generic [ref=e860]:
          - link "Chennai" [ref=e862] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-chennai-airport/
            - generic [ref=e863]: Chennai
          - link "Bhubaneswar" [ref=e865] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-bhubaneswar-airport/
            - generic [ref=e866]: Bhubaneswar
          - link "Goa" [ref=e868] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-goa-airport/
            - generic [ref=e869]: Goa
          - link "Pune" [ref=e871] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-pune-airport/
            - generic [ref=e872]: Pune
        - generic [ref=e873]:
          - link "Cochin" [ref=e875] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-cochin-airport/
            - generic [ref=e876]: Cochin
          - link "Kolkata" [ref=e878] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-kolkata-airport/
            - generic [ref=e879]: Kolkata
          - link "Amritsar" [ref=e881] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-amritsar-airport/
            - generic [ref=e882]: Amritsar
          - link "Jaipur" [ref=e884] [cursor=pointer]:
            - /url: https://www.easemytrip.com/cabs/cabs-from-jaipur-airport/
            - generic [ref=e885]: Jaipur
  - generic [ref=e887]:
    - generic [ref=e890]:
      - generic [ref=e891]:
        - list [ref=e893]:
          - button "OUR OFFERINGS" [ref=e894] [cursor=pointer]
          - button "QUICK LINKS" [ref=e895] [cursor=pointer]
          - button "POPULAR DESTINATION" [ref=e896] [cursor=pointer]
          - button "INTERNATIONAL DESTINATION" [ref=e897] [cursor=pointer]
          - button "POPULAR AIRLINE" [ref=e898] [cursor=pointer]
          - button "CONNECT WITH US" [ref=e899] [cursor=pointer]
          - button "OFFERS" [ref=e900] [cursor=pointer]
          - button "EMT INSIGHTS" [ref=e901] [cursor=pointer]
          - button "MEDIA" [ref=e902] [cursor=pointer]
          - link "INVESTOR RELATIONS" [ref=e903] [cursor=pointer]:
            - /url: https://www.easemytrip.com/investor-relations.html
          - link "CURRENT OPENINGS" [ref=e904] [cursor=pointer]:
            - /url: https://www.easemytrip.com/career.html
        - generic [ref=e906]:
          - paragraph [ref=e907]: Make your travel easy with a wide range of products and services.
          - list [ref=e909]:
            - listitem [ref=e910]:
              - link "Flight" [ref=e911] [cursor=pointer]:
                - /url: https://www.easemytrip.com/flights/
            - listitem [ref=e912]:
              - link "Hotels" [ref=e913] [cursor=pointer]:
                - /url: https://www.easemytrip.com/hotels/
            - listitem [ref=e914]:
              - link "Trains" [ref=e915] [cursor=pointer]:
                - /url: https://www.easemytrip.com/railways/
            - listitem [ref=e916]:
              - link "Holidays" [ref=e917] [cursor=pointer]:
                - /url: https://www.easemytrip.com/holidays/
            - listitem [ref=e918]:
              - link "Bus" [ref=e919] [cursor=pointer]:
                - /url: https://www.easemytrip.com/bus/
            - listitem [ref=e920]:
              - link "Flight Status" [ref=e921] [cursor=pointer]:
                - /url: https://www.easemytrip.com/flights/flight-status/
            - listitem [ref=e922]:
              - link "Cabs" [ref=e923] [cursor=pointer]:
                - /url: https://www.easemytrip.com/cabs/
            - listitem [ref=e924]:
              - link "Airlines" [ref=e925] [cursor=pointer]:
                - /url: https://www.easemytrip.com/directory/airlines.html
            - listitem [ref=e926]:
              - link "Airports" [ref=e927] [cursor=pointer]:
                - /url: https://www.easemytrip.com/directory/airports-in-india.html
            - listitem [ref=e928]:
              - link "Travel Guides" [ref=e929] [cursor=pointer]:
                - /url: https://www.easemytrip.com/travel-guides.html
            - listitem [ref=e930]:
              - link "Check PNR Status" [ref=e931] [cursor=pointer]:
                - /url: https://www.easemytrip.com/railways/pnr-status/
            - listitem [ref=e932]:
              - link "EMT PRO" [ref=e933] [cursor=pointer]:
                - /url: https://www.easemytrip.com/emtpro
            - listitem [ref=e934]:
              - link "Activities" [ref=e935] [cursor=pointer]:
                - /url: https://www.easemytrip.com/activities/
            - listitem [ref=e936]:
              - link "Travel Updates" [ref=e937] [cursor=pointer]:
                - /url: https://www.easemytrip.com/travel-updates.html
            - listitem [ref=e938]:
              - link "Corporate travel" [ref=e939] [cursor=pointer]:
                - /url: https://www.easemytrip.com/corporate
            - listitem [ref=e940]:
              - link "Blog" [ref=e941] [cursor=pointer]:
                - /url: https://www.easemytrip.com/blog/
            - listitem [ref=e942]:
              - link "Flight Check-in" [ref=e943] [cursor=pointer]:
                - /url: https://www.easemytrip.com/flights/web-check-in/
            - listitem [ref=e944]:
              - link "VIP Cabs" [ref=e945] [cursor=pointer]:
                - /url: https://www.easemytrip.com/bookvipcabs.html
      - generic [ref=e946]:
        - generic [ref=e947]:
          - img "EaseMyTrip.com" [ref=e949]
          - paragraph [ref=e951]: EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines, hotel bookings for nearly 1 million hotels in India and abroad, cab booking with 4000+ cab operators, bus tickets with 2000+ bus operators, and railway tickets in India for all major cities.
        - generic [ref=e952]:
          - generic [ref=e953]: DOWNLOAD EASEMYTRIP APP
          - generic [ref=e955]:
            - link "Download on Android" [ref=e957] [cursor=pointer]:
              - /url: //play.google.com/store/apps/details?id=com.easemytrip.android
              - img "Download on Android" [ref=e958]
            - link "Download on IOS" [ref=e960] [cursor=pointer]:
              - /url: https://itunes.apple.com/in/app/easemytrip-flight-booking/id1053030595?mt=8
              - img "Download on IOS" [ref=e961]
        - generic [ref=e962]:
          - generic [ref=e963]: SCAN QR CODE
          - img [ref=e967]
    - generic [ref=e968]:
      - generic [ref=e969]: Copyright © 2026 EaseMyTrip
      - img [ref=e971]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | 
  4  | export class CabsPage extends BasePage {
  5  |   readonly outstationTab: Locator;
  6  |   readonly fromContainer: Locator;
  7  |   readonly fromInput: Locator;
  8  |   readonly toContainer: Locator;
  9  |   readonly toInput: Locator;
  10 |   readonly pickupCalendar: Locator;
  11 |   readonly datepickerDiv: Locator;
  12 |   readonly hoursList: Locator;
  13 |   readonly minutesList: Locator;
  14 |   readonly doneButton: Locator;
  15 |   readonly searchButton: Locator;
  16 |   readonly suvCheckbox: Locator;
  17 |   readonly cabFare: Locator;
  18 |   readonly autoSuggestion: Locator;
  19 | 
  20 |   constructor(page: Page) {
  21 |     super(page);
  22 | 
  23 |     this.outstationTab      = page.getByText('Outstation').first();
  24 |     this.fromContainer      = page.locator("//div[@id='hrlysrc']");
  25 |     this.fromInput          = page.getByPlaceholder('From').first();
  26 |     this.toContainer        = page.locator("//div[@id='to']").first();
  27 |     this.toInput            = page.getByPlaceholder('To').first();
  28 |     this.pickupCalendar     = page.locator("//div[@id='pickCalender']").first();
  29 |     this.datepickerDiv      = page.locator('#ui-datepicker-div');
  30 |     this.hoursList          = page.locator('#hr > ul > li:nth-child(1)');
  31 |     this.minutesList        = page.locator('#min > ul > li:nth-child(3)');
  32 |     this.doneButton         = page.locator("//div[@onclick='Done(event)']");
  33 |     this.searchButton       = page.locator("//div[@onclick='GetList()']");
  34 |     this.suvCheckbox        = page.locator('input#suv');
  35 |     this.cabFare            = page.locator('//div[@class="cabFare _f25 "]');
  36 |     this.autoSuggestion     = page.locator('//div[@class="auto_sugg_tttl"]').first();
  37 |   }
  38 | 
  39 |   // --- Actions ---
  40 | 
  41 |   async goto(): Promise<void> {
  42 |     await this.navigate('/cabs/');
  43 |     await this.waitForPageLoad();
  44 |   }
  45 | 
  46 |   async selectOutstationTab(): Promise<void> {
  47 |     await this.outstationTab.click();
  48 |   }
  49 | 
  50 |   async enterFromLocation(location: string): Promise<void> {
  51 |     await this.fromContainer.click();
  52 |     await this.fromInput.click();
> 53 |     await this.fromInput.type(location);
     |                          ^ Error: locator.type: Test timeout of 30000ms exceeded.
  54 |     await this.autoSuggestion.click();
  55 |   }
  56 | 
  57 |   async enterToLocation(location: string): Promise<void> {
  58 |     await this.toContainer.click();
  59 |     await this.toInput.click();
  60 |     await this.toInput.type(location);
  61 |     await this.autoSuggestion.click();
  62 |   }
  63 | 
  64 |   async selectDate(day: string): Promise<void> {
  65 |     await this.pickupCalendar.click();
  66 |     await this.datepickerDiv.getByRole('link', { name: day, exact: true }).click();
  67 |     await this.hoursList.click();
  68 |     await this.minutesList.click();
  69 |     await this.doneButton.click();
  70 |   }
  71 | 
  72 |   async clickSearch(): Promise<void> {
  73 |     await this.searchButton.click();
  74 |   }
  75 | 
  76 |   async applySuvFilter(): Promise<void> {
  77 |     await this.suvCheckbox.check();
  78 |   }
  79 | 
  80 |   async getCabFareText(): Promise<string | null> {
  81 |     return this.cabFare.textContent();
  82 |   }
  83 | }
  84 | 
```