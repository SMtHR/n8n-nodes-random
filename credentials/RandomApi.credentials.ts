import {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class RandomApi implements ICredentialType {
  name = 'RandomApi';
  displayName = 'Random API';
  documentationUrl = '';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
    },
  ];
  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      qs: {
        'api_key': '={{$credentials.apiKey}}'
      }

    },
  };
  test: ICredentialTestRequest = {
    request: {
      baseURL: '={{$credentials?.domain}}',
      url: '/bearer',
    },
  };
}