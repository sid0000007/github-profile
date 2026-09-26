export interface RepoLanguage {
  name: string;
  color: string;
}

export interface RepoCard {
  name: string;
  forkedFromLabel: string;
  description: string;
  language?: RepoLanguage;
  visibility: 'Public' | 'Private';
}

export const POPULAR_REPOS: RepoCard[] = [
  {
    name: 'Complete-Python-3-Bootcamp',
    forkedFromLabel: 'Pierian-Data/Complete-Python-3-Bootcamp',
    description: 'Course Files for Complete Python 3 Bootcamp Course on Udemy',
    language: { name: 'Jupyter Notebook', color: '#da5b0b' },
    visibility: 'Public',
  },
  {
    name: 'flutter_login_ui',
    forkedFromLabel: 'MarcusNg/flutter_login_ui',
    description: 'https://youtu.be/6kaEbTfb444',
    language: { name: 'Dart', color: '#00b4ab' },
    visibility: 'Public',
  },
  {
    name: 'gitignore',
    forkedFromLabel: 'github/gitignore',
    description: 'A collection of useful .gitignore templates',
    visibility: 'Public',
  },
  {
    name: 'node-opcua-logger',
    forkedFromLabel: 'coussej/node-opcua-logger',
    description: 'An OPCUA Client for logging data to InfluxDB!',
    language: { name: 'JavaScript', color: '#f1e05a' },
    visibility: 'Public',
  },
  {
    name: 'kafkajs',
    forkedFromLabel: 'tulios/kafkajs',
    description: 'A modern Apache Kafka client for node.js',
    language: { name: 'JavaScript', color: '#f1e05a' },
    visibility: 'Public',
  },
  {
    name: 'node-opcua-1',
    forkedFromLabel: 'node-opcua/node-opcua',
    description:
      'an implementation of a OPC UA stack fully written in javascript and nodejs - http://node-opcua.github.io/',
    language: { name: 'TypeScript', color: '#3178c6' },
    visibility: 'Public',
  },
];
