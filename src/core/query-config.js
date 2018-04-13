const portalQueryConfig = {
  // search modes (all content, web content only)
  viewQueries: {
    web:
      '-type:"Layer" -type: "Map Document" -type:"Map Package" -type:"Basemap Package" -type:"Mobile Basemap Package" -type:"Mobile Map Package" -type:"ArcPad Package" -type:"Project Package" -type:"Project Template" -type:"Desktop Style" -type:"Pro Map" -type:"Layout" -type:"Explorer Map" -type:"Globe Document" -type:"Scene Document" -type:"Published Map" -type:"Map Template" -type:"Windows Mobile Package" -type:"Layer Package" -type:"Explorer Layer" -type:"Geoprocessing Package" -type:"Desktop Application Template" -type:"Code Sample" -type:"Geoprocessing Package" -type:"Geoprocessing Sample" -type:"Locator Package" -type:"Workflow Manager Package" -type:"Windows Mobile Package" -type:"Explorer Add In" -type:"Desktop Add In" -type:"File Geodatabase" -type:"Feature Collection Template"',
    gis:
      '-type:"Code Attachment" -type:"Featured Items" -type:"Symbol Set" -type:"Color Set" -type:"Windows Viewer Add In" -type:"Windows Viewer Configuration"',
    none:
      '-type:"Code Attachment" -type:"Featured Items" -type:"Symbol Set" -type:"Color Set" -type:"Windows Viewer Add In" -type:"Windows Viewer Configuration"'
  },

  // key-value pairs or pre-defined query filters on search results page
  filterQueries: {
    all: {
      focus: null,
      t: 'content',
      f: ''
    },
    maps: {
      focus: 'maps',
      t: 'content',
      f:
        '-type:"web mapping application" -type:"Layer Package" (type:"Project Package" OR type:"Windows Mobile Package" OR type:"Map Package" OR type:"Basemap Package" OR type:"Mobile Basemap Package" OR type:"Mobile Map Package" OR type:"Pro Map" OR type:"Project Package" OR type:"Web Map" OR type:"CityEngine Web Scene" OR type:"Map Document" OR type:"Globe Document" OR type:"Scene Document" OR type:"Published Map" OR type:"Explorer Map" OR type:"ArcPad Package" OR type:"Map Template")'
    },
    scenes: {
      focus: 'scenes',
      t: 'content',
      f: '-type:"CityEngine Web Scene" (type:"Web Scene")'
    },
    layers: {
      focus: 'layers',
      t: 'content',
      f:
        '-type:"web mapping application" -type:"Geodata Service" (type:"Scene Service" OR type: "Feature Collection" OR type:"Layer" OR type: "Explorer Layer" OR type: "Tile Package" OR type:"Vector Tile Package" OR type: "Scene Package" OR type:"Layer Package" OR type:"Feature Service" OR type:"Stream Service" OR type:"Map Service" OR type:"Vector Tile Service" OR type:"Image Service" OR type:"WMS" OR type:"KML" OR typekeywords:"OGC" OR typekeywords:"Geodata Service" OR type:"Globe Service" OR type:"CSV" OR type: "Shapefile" OR type: "GeoJson" OR type: "Service Definition" OR type: "File Geodatabase" OR type: "CAD Drawing")'
    },
    applications: {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Code Sample" OR type:"Web Mapping Application" OR type:"Mobile Application" OR type:"Application" OR type:"Desktop Application Template" OR type:"Desktop Application" OR type:"Operation View" OR type:"Operations Dashboard Extension")'
    },
    tools: {
      focus: 'tools',
      t: 'content',
      f:
        '-type:"KML" (typekeywords:"tool" OR type:"Raster function template" OR type:"Geodata Service" OR type: "Workflow Manager Package" OR type:"Rule Package" OR type:"Operations Dashboard Add In" OR type:"Workflow Manager Service")'
    },
    files: {
      focus: 'files',
      t: 'content',
      f:
        '(typekeywords:"Document" OR type:"Image" OR type:"Layout" OR type:"Desktop Style" OR type:"Project Template") -type:"Map Document" -type:"Image Service" -type:"Explorer Document" -type:"Explorer Map" -type:"Globe Document" -type:"Scene Document"'
    },
    'maps-webmaps': {
      focus: 'maps',
      t: 'content',
      f:
        '(type:"Web Map" OR type:"CityEngine Web Scene") -type:"Web Mapping Application" -(owner:"esri" tags:"basemap")'
    },
    'maps-mapfiles': {
      focus: 'maps',
      t: 'content',
      f:
        '(type:"Map Document" OR type:"Windows Mobile Package" OR type:"Globe Document" OR type:"Scene Document"  OR type:"Published Map" OR type:"Explorer Map" OR type:"ArcPad Package" OR type:"Map Package" OR type:"Basemap Package" OR type:"Mobile Basemap Package" OR type:"Mobile Map Package" OR type:"Pro Map" OR type:"Project Package" OR type:"Map Template")'
    },
    'maps-mapservices': {
      focus: 'maps',
      t: 'content',
      f:
        '(type:"WMS" OR type:"KML" OR type:"Map Service" OR type:"Image Service" OR type:"Feature Service" OR type:"Globe Service")'
    },
    'maps-packages': {
      focus: 'maps',
      t: 'content',
      f:
        '(type:"Layer Package" OR type:"Map Package" OR type:"Basemap Package" OR type:"Mobile Basemap Package" OR type:"Mobile Map Package" OR type:"Project Package" OR type:"Tile Package" OR type:"Scene Package")'
    },
    'maps-others': {
      focus: 'maps',
      t: 'content',
      f:
        '(type:"Shapefile" OR type:"GeoJson" OR type:"CSV" OR type:"Explorer Map" OR type:"Map Document" OR type:"Globe Document" OR type:"Scene Document" OR type:"Layer" OR type:"Explorer Layer" OR type:"Explorer Map" OR type:"Published Map" OR type:"CAD Drawing") -type:"Layer Package"'
    },
    'maps-packages-layer': {
      focus: 'maps',
      t: 'content',
      f: 'type:"Layer Package"'
    },
    'maps-packages-map': {
      focus: 'maps',
      t: 'content',
      f: 'type:"Map Package"'
    },
    'layers-weblayers': {
      focus: 'layers',
      t: 'content',
      f:
        '(type:"Feature Collection" OR type:"Feature Service" OR type:"Image Service" OR type:"Map Service" OR type:"Vector Tile Service" OR type:"Scene Service" OR type:"Stream Service" OR type: "WMS" OR type: "KML") -type:"Web Map" -type:"Web Mapping Application" -type:"Shapefile"'
    },
    'layers-weblayers-features': {
      focus: 'layers',
      t: 'content',
      f:
        '(type:"Feature Collection" OR type:"Feature Service" OR type:"Stream Service") -typekeywords:"Table"'
    },
    'layers-weblayers-imagery': {
      focus: 'layers',
      t: 'content',
      f: '(type:"Image Service")'
    },
    'layers-weblayers-tiles': {
      focus: 'layers',
      t: 'content',
      f:
        '(type:"Map Service" OR type:"Vector Tile Service") (typekeywords: "Hosted" OR typekeywords:"Tiled")'
    },
    'layers-weblayers-mapimage': {
      focus: 'layers',
      t: 'content',
      f:
        '(type:"Map Service"  OR type: "WMS") -typekeywords:"Tiled" -typekeywords:"Hosted" -type:"Web Map" -type:"Web Mapping Application" -type:"Shapefile"'
    },
    'layers-layerfiles': {
      focus: 'layers',
      t: 'content',
      f:
        '(type: "Layer" OR type: "Explorer Layer" OR type: "Tile Package" OR type:"Vector Tile Package" OR type: "Scene Package" OR type:"Layer Package" OR type:"CSV" OR type: "Shapefile" OR type: "GeoJson" OR type: "Service Definition" OR type: "File Geodatabase" OR type: "CAD Drawing") -type:"Explorer Maps" -type:"Map Documents"'
    },
    'layers-weblayers-scenelayers': {
      focus: 'layers',
      t: 'content',
      f: '(type:"Scene Service")'
    },
    'layers-weblayers-tables': {
      focus: 'layers',
      t: 'content',
      f: '(typekeywords:"Table")'
    },
    // self add
    'layers-map-service': {
      focus: 'layers',
      t: 'content',
      f: 'type:"Map Service"'
    },
    'layers-wms': {
      focus: 'layers',
      t: 'content',
      f: 'type:"WMS"'
    },
    'layers-stream-service': {
      focus: 'layers',
      t: 'content',
      f: 'type:"Stream Service"'
    },

    'applications-web': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Web Mapping Application")'
    },
    'applications-web-flex': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Web Mapping Application" typekeywords:"Flex")'
    },
    'applications-web-flex-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Flex" AND typekeywords:"Ready To Use")'
    },
    'applications-web-flex-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Flex" AND typekeywords:"Configurable")'
    },
    'applications-web-flex-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Flex" AND typekeywords:"Code Sample")'
    },

    'applications-web-javascript': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Web Mapping Application" AND typekeywords:"Javascript")'
    },
    'applications-web-javascript-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Javascript" AND typekeywords:"Ready To Use")'
    },
    'applications-web-javascript-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Javascript" AND typekeywords:"Configurable")'
    },
    'applications-web-javascript-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Javascript" AND typekeywords:"Code Sample")'
    },

    'applications-web-silverlight': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Web Mapping Application" AND typekeywords:"Silverlight")'
    },
    'applications-web-silverlight-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Silverlight" AND typekeywords:"Ready To Use")'
    },
    'applications-web-silverlight-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Silverlight" AND typekeywords:"Configurable")'
    },
    'applications-web-silverlight-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Web Mapping Application" AND typekeywords:"Silverlight" AND typekeywords:"Code Sample")'
    },

    'applications-mobile': {
      focus: 'applications',
      t: 'content',
      f: 'type:"Mobile Application"'
    },

    'applications-mobile-android': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Mobile Application" AND typekeywords:"ArcGIS for Android")'
    },
    'applications-mobile-android-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"ArcGIS for Android" AND typekeywords:"Ready To Use")'
    },
    'applications-mobile-android-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"ArcGIS for Android" AND typekeywords:"Configurable")'
    },
    'applications-mobile-android-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"ArcGIS for Android" AND typekeywords:"Code Sample")'
    },

    'applications-mobile-iphone': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Mobile Application" AND typekeywords:"ArcGIS for iPhone")'
    },
    'applications-mobile-iphone-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"ArcGIS for iPhone" AND typekeywords:"Ready To Use")'
    },
    'applications-mobile-iphone-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"ArcGIS for iPhone" AND typekeywords:"Configurable")'
    },
    'applications-mobile-iphone-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"ArcGIS for iPhone" AND typekeywords:"Code Sample")'
    },

    'applications-mobile-windowsmobile': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Mobile Application" AND typekeywords:"Windows Mobile")'
    },
    'applications-mobile-windowsmobile-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Windows Mobile" AND typekeywords:"Ready To Use")'
    },
    'applications-mobile-windowsmobile-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Windows Mobile" AND typekeywords:"Configurable")'
    },
    'applications-mobile-windowsmobile-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Windows Mobile" AND typekeywords:"Code Sample")'
    },

    'applications-mobile-windowsphone': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Mobile Application" AND typekeywords:"Windows Phone")'
    },
    'applications-mobile-windowsphone-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Windows Phone" AND typekeywords:"Ready To Use")'
    },
    'applications-mobile-windowsphone-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Windows Phone" AND typekeywords:"Configurable")'
    },
    'applications-mobile-windowsphone-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Windows Phone" AND typekeywords:"Code Sample")'
    },

    'applications-mobile-javascript': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Mobile Application" AND typekeywords:"JavaScript")'
    },
    'applications-mobile-javascript-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"JavaScript" AND typekeywords:"Ready To Use")'
    },
    'applications-mobile-javascript-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"JavaScript" AND typekeywords:"Configurable")'
    },
    'applications-mobile-javascript-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"JavaScript" AND typekeywords:"Code Sample")'
    },

    'applications-mobile-flex': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Mobile Application" AND typekeywords:"Flex")'
    },
    'applications-mobile-flex-readytouse': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Flex" AND typekeywords:"Ready To Use")'
    },
    'applications-mobile-flex-configurable': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Flex" AND typekeywords:"Configurable")'
    },
    'applications-mobile-flex-codesample': {
      focus: 'applications',
      t: 'content',
      f:
        '(type:"Mobile Application" AND typekeywords:"Flex" AND typekeywords:"Code Sample")'
    },

    'applications-desktop': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Desktop Application" -type:"Desktop Application Template")'
    },

    'applications-desktop-java': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Desktop Application" AND typekeywords:"Java")'
    },

    'applications-desktop-dotnet': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Desktop Application" AND typekeywords:".NET-Windows Desktop")'
    },

    'applications-desktop-osx': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Desktop Application" AND typekeywords:"OS X")'
    },

    'applications-desktop-qt': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Desktop Application" AND typekeywords:"Qt")'
    },

    'applications-desktop-wpf': {
      focus: 'applications',
      t: 'content',
      f: '(type:"Desktop Application" AND typekeywords:"WPF")'
    },

    'tools-locators': {
      focus: 'tools',
      t: 'content',
      f: '(type:"Geocoding Service" OR type:"Locator Package")'
    },
    'tools-geodatabase': {
      focus: 'tools',
      t: 'content',
      f: 'type:"Geodata Service"'
    },
    'tools-geometric': {
      focus: 'tools',
      t: 'content',
      f: 'type:"Geometry Service"'
    },
    'tools-geoprocessing': {
      focus: 'tools',
      t: 'content',
      f:
        '(type:"Geoprocessing Service" OR type:"Geoprocessing Package" OR type:"Geoprocessing Sample")'
    },
    'tools-network': {
      focus: 'tools',
      t: 'content',
      f: 'type:"Network Analysis Service"'
    },
    'files-document': {
      focus: 'files',
      t: 'content',
      f: '(typekeywords:"Document") -type:"PDF"'
    },
    'files-pdf': {
      focus: 'files',
      t: 'content',
      f: '(type:"PDF")'
    },
    'files-image': {
      focus: 'files',
      t: 'content',
      f: '(type:"Image") -type:"Image Service"'
    }
  }
};

export default portalQueryConfig;
