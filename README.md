# Leaflet-Challenge-Part-1

Background:  The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. 
 
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet. 
  
Leaflet-Part-1 folder contains the following files:  
* index.html  
* css folder:
* style.css
* js folder:
* logic.js
  
The code creates a visualization for the earthquake dataset from the United State Geological Survey (USGS) GeoJSON URL, which provides data for the past seven days. Leaflet is used to create a map that plots all of the earthquakes from the dataset based on their longitude and latitude.  The index.js includes code to import the TileLayer, connect to the GeoJSON API using D3, and displays earthquake magnitudes with a legend showing depth.  The earthquake's marker color and size is based on the earthquake's magnitude (larger marker) and depth (darker color).  The code includes popups, which provide additional details for each earthquake.  A legend is included and the specific parameter for the legend is found in the css file. Download files to a folder on your desktop, right click the html file, then open with google chrome.

Resources:  Resources and code used for this project includes Instructor provided starter code, Office hours, Study Group, course materials, geeksforgeeks, D3js.org documentation, StackOverflow, Leaflet documentation, and GitHub.

Source: United State Geological Survey (USGS)
