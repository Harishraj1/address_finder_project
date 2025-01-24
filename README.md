# Address Finder

Navigate to the project directory:
```bash
cd address_finder
```

### 2. Backend Setup
- Navigate to the `backend` directory:
  ```bash
  cd backend
  ```
- Create a virtual environment (optional but recommended):
  ```bash
  python -m venv venv
  source venv/bin/activate   # For Linux/Mac
  venv\Scripts\activate     # For Windows
  ```
- Install the required Python packages:
  ```bash
  pip install -r requirements.txt
  ```
- Start the Flask development server:
  ```bash
  flask run
  ```

The backend will now be running on [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

### 3. Frontend Setup
- Open a new terminal and navigate to the `frontend` directory:
  ```bash
  cd frontend
  ```
- Install the required Node.js packages:
  ```bash
  npm install
  ```
- Start the React development server:
  ```bash
  npm start
  ```

The frontend will now be running on [http://localhost:3000/](http://localhost:3000/).

## Running the Project
To run the project:
1. Open two terminals.
2. In one terminal, navigate to the `backend` directory and start the Flask server:
   ```bash
   flask run
   ```
3. In the second terminal, navigate to the `frontend` directory and start the React server:
   ```bash
   npm start
   ```
4. Access the application in your browser at [http://localhost:3000/](http://localhost:3000/).

---
