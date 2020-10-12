# Homework

## Running
1. Clone repo
2. Install dependencies: `npm install`
3. Run API: `npm start` - see `package.json` for details
    - This prints out the three required outputs sorted by:
        - gender (females before males) then by last name ascending
        - birth date, ascending
        - last name, descending
    - It also exposes the four required endpoints
        - `POST localhost:3000/records`
            - example: 
            ```shell
                curl --request POST 'http://localhost:3000/records' \
                --header 'Content-Type: text/plain' \
                --data-raw 'Hickory | Hall | Male | prettyColor | 03/15/1900'
            ```
        - `GET localhost:3000/records/name`
        - `GET localhost:3000/records/birthdate`   
        - `GET localhost:3000/records/gender`      
4. Alternatively run: `npm run output` to just run the output script.
    - or run: `node ParseFiles.js file1 file2 file3` 


## Testing

Run: `npm test` - This outputs results of test and coverage per file.

## Assumptions
- input date formats are in MM/DD/YYYY format
- data resets to what's in input files on each run of server
- CLI program takes a max of three input files (can be easily changed if needed)