var hostElement = document.querySelector('.Chat__body');
const integration_id = '5edfb68f-ee2e-490e-931b-7dbd9483a5b9';

window.loadWatsonAssistantChat({
    debug: true,
    element: hostElement,
    integrationID: integration_id,
    showLauncher: false,
    openChatByDefault: true,
    region: 'us-south',
    __ibm__: {
        cdnEndpoint: 'https://assistant-web.watsonplatform.net',
        postURL: 'https://assistant-chat-us-south.watsonplatform.net/public/message/',
        isPreviewLink: true,
        history: ''
    }
}).then( (instance) => {
    window.instance = instance;
    instance.render().then( () => {
    hostElement.classList.add('Chat__body--background');
    });
});

/*
 (C) Copyright IBM Corp. 2017 - 2019. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the &#34;License&#34;); you may not use this file except
  in compliance with the License. You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software distributed under the License
  is distributed on an &#34;AS IS&#34; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
  or implied. See the License for the specific language governing permissions and limitations under
  the License.

  watson-web-channel 0.1.0-0
  Contributors: Ethan Winters, Raymond Chu, Karen Harris, Ashley Lord, Amy Zhong, Ryan Simpson, Anthony Wong, Wilson Wong, David G Terry, Simon Burns, Damon Lundin, John Engstrom, Neil Mallinar
*/