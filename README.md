# CampaignDashboard
A React.js app built for viewing different campaigns and filter them based on Date and campaign name. The campaigns can also be added dynamically. 


In the project directory, you can run:

### 'yarn install'

to add the dependencies.

To start the app, run

### yarn start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app has two widgets. 

The search widget will provide date filters to search campaigns by date range and a input field to search campaigns by name.

When both date and name is given as input, the app will search for Campaign name only. 

After searching with name, and to search with date again, empty the input field.

There is a `SEARCH` button to initiate the search.

There is a `RESET` button that will reset the search results, but not the search form.

The Campaign list will be displayed as a Table with the following columns.

1. Name
2. Start date
3. End date
4. Status
5. Budget

The campaign list can be added dynamically as follows:

1. Open Chrome developer tools
2. Move to console window
3. Type the following
    `window.Campaign.AddCampaigns([
        {
            id: '1',
            name: 'Sea campaign',
            startDate: '9/19/2017',
            endDate: '3/9/2018',
            Budget: '30000'
        },
        {
            id: '9',
            name: 'Rain campaign',
            startDate: 'Sat Oct 31 2020 14:52:00 GMT+0530 (India Standard Time)',
            endDate: 'Thu Dec 31 2026 14:52:00 GMT+0530 (India Standard Time)',
            Budget: '95000'
        },
        {
            id: '10',
            name: 'Water campaign',
            startDate: 'Fri Oct 29 2010 14:53:00 GMT+0530 (India Standard Time)',
            endDate: 'Sat Feb 01 2014 14:53:00 GMT+0530 (India Standard Time)',
            Budget: '100000'
        }])`

#### The table will be updated with the new data. 

### Cross browser compatibility:

The app is supported in the following browsers

1. Latest 3 versions of Chrome
2. lastest 2 versions of Mozilla
3. Latest version of EDGE
4. No support for IE

The app is built for Desptop screens, laptop screens and Tablets. Not built for mobile.

Refer package.json for the list of libraries used.

### Built by

### Athif J
### Skype: athifjey
### github: athifjey
### mail: athifbijli@gmail.com
### Call & WhatsApp: +91 9944 089 079

