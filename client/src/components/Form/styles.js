import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '12px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  selectInput: {
    height: '40px',
    margin: '10px',
    textAlign: 'center',
    color: 'rgba(30,135,199, 0.9)'
  },
  formTitle: {
    color: 'rgba(30,135,199, 0.9)',
    fontWeight: '700',
    textDecoration: 'none'
  }
}));