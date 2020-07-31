module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'index',
        'prototype-an-assistant',
        'installation',
        'cheatsheet',
        'migrate-from',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      collapsed: false,
      items: [
        'cdd',
        'generating-nlu-data',
        'writing-stories',
      ],
    },
    {
      type: 'category',
      label: 'Conversation Patterns',
      collapsed: false,
      items: [
        'chitchat-faqs',
        'business-logic',
        'fallback-handoff',
        'unexpected-input',
        'contextual-conversations',
      ],
    },
    {
      type: 'category',
      label: 'Preparing For Production',
      collapsed: false,
      items: [
        'tuning-your-model',
        'testing-your-assistant',
        'setting-up-ci-cd',
        'how-to-deploy',
        'messaging-and-voice-channels',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'glossary',
      ],
    },
    {
      type: 'category',
      label: 'Rasa Open Source',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Training Data',
          items: [
            'training-data-format',
            'stories',
          ],
        },
        'domain',
        {
          type: 'category',
          label: 'Config',
          items: [
            {
              type: 'category',
              label: 'Pipeline Components',
              items: [
                'components/language-models',
                'components/tokenizers',
                'components/featurizers',
                'components/intent-classifiers',
                'components/entity-extractors',
                'components/selectors',
                'components/custom-nlu-components',
              ],
            },
            {
              type: 'category',
              label: 'Policies',
              items: [
                'policies',
              ],
            },
            'training-data-importers',
          ],
        },
        {
          type: 'category',
          label: 'Actions',
          items: [
            'responses',
            'retrieval-actions',
            'forms',
            'reminders-and-external-events',
            'default-actions',
          ],
        },
        {
          type: 'category',
          label: 'Channel Connectors',
          items: [
            'connectors/your-own-website',
            'connectors/facebook-messenger',
            'connectors/slack',
            'connectors/telegram',
            'connectors/twilio',
            'connectors/hangouts',
            'connectors/microsoft-bot-framework',
            'connectors/cisco-webex-teams',
            'connectors/rocketchat',
            'connectors/mattermost',
          ],
        },
        {
          type: 'category',
          label: 'Architecture', // name still confusing with architecture page elsewhere
          items: [
            'tracker-stores',
            'event-brokers',
            'model-storage',
            'lock-stores',
            'nlg',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rasa SDK',
      collapsed: false,
      items: [
        'running-action-server',
        {
          type: 'category',
          label: 'Custom Actions',
          items: [
            'actions',
            'knowledge-bases',
          ],
        },
        'tracker-dispatcher',
        'events',
        'rasa-sdk-changelog'
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'architecture',
        'command-line-interface',
        'http-api',
        'jupyter-notebooks',
      ],
    },
    {
      type: 'category',
      label: 'Versioning',
      collapsed: false,
      items: [
        'changelog',
        'migration-guide',
      ],
    },
  ],
};
