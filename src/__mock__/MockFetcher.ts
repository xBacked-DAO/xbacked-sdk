import EventFetcher from "../EventFetcher";

class MockFetcher extends EventFetcher {
  setAnnouncer(announcer: any) {
    this.announcer = announcer;
  }
}
export default MockFetcher;
