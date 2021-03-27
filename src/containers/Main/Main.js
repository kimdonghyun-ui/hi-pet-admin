import React, { useEffect } from 'react';
import Layout from '../../components/common/Layout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  introduce: {
    boxSizing: 'border-box',
    padding: '45px 0 50px',
    backgroundSize: 'cover',
    backgroundColor: '#000',
    textAlign: 'center',
  },
  titleh2: {
    color: '#fff',
    display: 'inline-block',
    borderBottom: '2px #FFF solid',
    marginBottom: '10px',
    fontWeight: 'bold',
    margin: '0',
  },
}));

function Main() {
  const classes = useStyles();
  useEffect(() => {
    console.log('메인시작');
  }, []);

  return (
    <div>
      dshfjksdhik
      <Layout>
        <h1>메인</h1>
      </Layout>
    </div>
  );
}

export default Main;
