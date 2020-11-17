// this model represents responce received from youtube data v3 api

export class Playlist {
  kind: String;
  etag: String;
  items: items[];
  pageInfo: any;
}

class items {
  kind: String;
  etag: String;
  id: String;
  snippet: {
    publishedAt: String;
    channelId: String;
    title: String;
    description: String;
    thumbnails: {
      default: {
        url: String;
        width: Number;
        height: Number;
      };
      medium: {
        url: String;
        width: Number;
        height: Number;
      };
      high: {
        url: String;
        width: Number;
        height: Number;
      };
      standard: {
        url: String;
        width: Number;
        height: Number;
      };
      maxres: {
        url: String;
        width: Number;
        height: Number;
      };
    };
    channelTitle: String;
    playlistId: String;
    position: Number;
    resourceId: {
      kind: String;
      videoId: String;
    };
  };
}
