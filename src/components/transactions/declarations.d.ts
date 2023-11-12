// TODO: make this reflect the uploaded csv cols since that's what it
// actually is. These are not saved to the DB, they're just used to
// construct the stuff saved to the DB
interface transaction {
  date: Date;
  description: string;
  magnitude: number;
  balance: number;
}
