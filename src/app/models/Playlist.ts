// this model represents responce received from youtube data v3 api

export class Playlist {
  kind: string;
  etag: string;
  items: items[];
  pageInfo: any;
}

class items {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: Number;
        height: Number;
      };
      medium: {
        url: string;
        width: Number;
        height: Number;
      };
      high: {
        url: string;
        width: Number;
        height: Number;
      };
      standard: {
        url: string;
        width: Number;
        height: Number;
      };
      maxres: {
        url: string;
        width: Number;
        height: Number;
      };
    };
    channelTitle: string;
    playlistId: string;
    position: Number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
}
