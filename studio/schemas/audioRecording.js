export default {
  name: 'audioRecording',
  title: 'Audio Recording',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'mp3',
      title: 'MP3 File',
      description: 'This needs to be an mp3 file!',
      type: 'file'
    },
    {
      name: 'recordedDate',
      title: 'Date Recorded',
      description: 'Date of show/event recorded',
      type: 'datetime'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockText'
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'audioRecordingMember' }]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'mainImage'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'relatedAudioRecordings',
      title: 'Related recordings',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'audioRecording' } }]
    }
  ]
}
