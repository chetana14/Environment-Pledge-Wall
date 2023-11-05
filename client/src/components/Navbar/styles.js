import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    margin: '50px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 35px',
  },
  heading: {
    color: 'rgba(30,135,199, 0.9)',
    textDecoration: 'none',
    fontWeight: '700'
  },
  image: {
    marginRight: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '360px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(30,135,199, 0.8)',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: 'white',
    backgroundColor: 'rgba(30,135,199, 0.8)',
  },
}));