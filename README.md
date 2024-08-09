# TextCharts

## About
The application searches for entities within a `.txt` file. It displays the found entities via the TextRazor API in a graph with statistical data or as raw data, with the option to search for their descriptions on Wikipedia.

## Stack
It is programmed in React and runs on a custom back-end server, with the back-end on port 3001 and the front-end on port 3000.

## How to Start?
1. Open two terminals in `Visual Studio`.
2. Type `npm i` in both terminals to initialize the dependencies.
3. In the first terminal, type `node server`.
4. In the second terminal, type `npm start dev`.
5. The application will be running in the browser at `localhost:3000`.
6. You can use the `/src/data.txt` file for the first analysis.