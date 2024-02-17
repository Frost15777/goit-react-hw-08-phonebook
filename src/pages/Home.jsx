import { Watermark } from 'antd';

const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center',
  },
};

const Home = () => (
  <Watermark gap={[50, 50]}>
    <div style={styles.container}>
      <h1 style={styles.title}>Home page of the Phonebook</h1>
    </div>
  </Watermark>
);

export default Home;