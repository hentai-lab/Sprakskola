# Sprakskola

Node project using IBM technologies, more specifically AI technologies for building a word game. This project uses Visual Reconogition, Language Translator and Watson Assistant (Chatbot).

# Usage

To get started, install its dependencies using the following command:

```
npm install
```

If the installation using the previous command was unsuccessful, install all packages using:

```
npm install --save ejs express ibm-watson
```

Once this is done, you can start your local server with the command:

```
npm start
```

**NOTE:** It is recommended that you use `npm install` or, if it does not work, make sure that the `ibm-watson` package version is the same as `package.json` (4.5.3), as this may be a problem!

# Configuration files

### keys.json

The **keys.json** file is responsible for storing and passing the keys needed to execute the code, since it uses IBM Cloud services. For the code to work, you must enter your credentials (keys) in this file.

### sprakskola-skill.json

The **sprakskola-skill.json** file contains the skill used to create chatbot. So if you want to keep the same chatbot, use this file!