# PSJ-CS-WEB

This repository is dedicated to PSJ-CS-WEB, a project focused on implementing chatbot technology to assist management team of a home cluster maintain the resident with the complain, IPL checking and many more.

## Pre-requistites

1. clone the repository
2. install the requirement for chatbot in [psj-cs-api/chatbot/requirement.txt](psj-cs-api/chatbot/requirement.txt)
3. install the requirement for api in [psj-cs-api/requirements.txt](psj-cs-api/requirements.txt)
4. install the package required for psj-web-admin and psj-web-user which is in file package.json in each folder

## How to run the website

1. open terminal in this project directory and run the api at psj-cs-api folder

```bash
cd psj-cs-api
python main.py
```

1. open new terminal in this project directory and run admin web at psj-web-admin folder

```bash
cd psj-web-admin
npm run host
```

1. access the admin web using provided url ip and port
2. open another new terminal in this project directory and run user web at psj-web-user folder

```bash
cd psj-web-user
npm run host
```

1. access the user web using provided url ip and port

## PSJ-WEB-ADMIN

The admin web interface includes several features designed to assist administrators in managing the system efficiently. Key features include:

- **Maintain Resident User Accounts**: Admins can create, update, and delete resident user accounts to ensure accurate and up-to-date user information.
- **Manage Complaints**: Admins can view, address, and resolve complaints submitted by resident users, facilitating effective issue tracking and resolution.
- **Create Information Posts**: Admins can create and publish information posts to communicate important updates and announcements to residents.
- **Chat with Chatbot**: Admin can interact with a chatbot for assistance with obtaining information about cluster.

## PSJ-WEB-USER

The user web interface offers several features designed to enhance the user experience and facilitate easier management of personal tasks. Key features include:

- **Maintain and Check IPL**: Users can view their environmental management fees (IPL) easily.
- **Submit Complaints**: Users can submit complaints directly through the web interface, ensuring that their issues are promptly communicated to the management team.
- **Chat with Chatbot**: Users can interact with a chatbot for assistance with obtaining information about cluster.

## How to train your own chatbot model

1. Prepare a dataset containing a list of input questions, tags, and labels.
2. Create a folder on the drive.
3. Place the dataset in the created drive folder.
4. Run the `lstm.ipynb` in the folder, including the following steps:
    - Install and import libraries.
    - Preprocessing.
    - Word embedding.
    - Model training.
    - Evaluation.
5. The output should be a file in HDF5 format.
6. Repeat the same steps for other comparison models.
7. Compare the results of all the models.
