const ENV = 'development';

export const callId = {
  development: '0lezfuX36X0Y',
  production: 'new-call-id',
}[ENV];

export const apiKey = {
  development: 'mmhfdzb5evj2',
  production: 'ytvttgkt5vry',
}[ENV];

export const users = {
  development: {
    streamer: {
      id: 'Cad_Bane',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQ2FkX0JhbmUiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0NhZF9CYW5lIiwiaWF0IjoxNzEwOTMwODg0LCJleHAiOjE3MTE1MzU2ODl9.HSwPZX0V3a4QzRYjxZCe-oCQCM0tRo7ZdF9AwJIeBTk',
      image: 'https://getstream.io/random_svg/?id=Cad&name=Cad',
    },
    viewer: {
      id: 'Emperor_Palpatine',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRW1wZXJvcl9QYWxwYXRpbmUiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0VtcGVyb3JfUGFscGF0aW5lIiwiaWF0IjoxNzExMzU0ODM4LCJleHAiOjE3MTE5NTk2NDN9.UCp_BxMs4nXOsHXKQdqBMnos38YYQ61xcDWE0WHl5Ow',
      image: 'https://getstream.io/random_svg/?id=talon&name=Talon',
    },
  },
  production: {
    streamer: {
      id: 'Amira_Streamer',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQW1pcmFfU3RyZWFtZXIifQ.dUWU5LS1qblIBw5H21OmtfUwuEQ4jbN-l7sMBe-2E3Y',
      image: 'https://getstream.io/random_svg/?id=Streamer&name=Streamer',
    },
    viewer: {
      id: 'Amira_Viewer',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQW1pcmFfVmlld2VyIn0.7JDIbKlxoWTvPxabi5qtJFZt8nLssIty8nuwtPjrvQM',
      image: 'https://getstream.io/random_svg/?id=Viewer&name=Viewer',
    },
  },
}[ENV];
