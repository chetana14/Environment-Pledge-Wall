import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Checkbox, FormGroup, FormControlLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', email: '', location: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [errors, setErrors] = useState({});
  const regName = /^[a-zA-Z ]*$/;
  const regEmail = /^\S+@\S+\.\S+$/;
  const regAddress = /^[a-zA-Z0-9\s,'-]*$/;

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', email: '', location: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (postData.tags === '') {
      errors.name = 'Name is required';
    } else if (!regName.test(postData.tags)) {
      errors.name = 'Invalid Name';
    }
    if (postData.title === '') {
      errors.title = 'Please select a Concern';
    }
    if (postData.message === '') {
      errors.message = 'Message is required';
    } else if (postData.message.length < 20) {
      errors.message = 'Message should be more than 20 words';
    }
    if (postData.email === '') {
      errors.email = 'Email is required';
    } else if (!regEmail.test(postData.email)) {
      errors.email = 'Invalid Email';
    }
    if (postData.location === '') {
      errors.location = 'Location is required.';
    } else if (!regAddress.test(postData.location)) {
      errors.location = 'Invalid Address';
    }
    //Set the errors state
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      if (!currentId) {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      }
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center" style={{ color: 'rgba(0, 0, 0, 0.54)', fontWeight: 'bold' }}>
          Please Sign In to take a pledge and like other's pledge.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h5" className={classes.formTitle}>{currentId ? `Editing "${post.title}"` : 'Take A Pledge!'}</Typography>
        <TextField name="tags" variant="outlined" label="Name" fullWidth required error={errors.name}
          value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        {errors && <div>{errors.name}</div>}
        <TextField name="email" variant="outlined" label="Email" fullWidth required error={errors.email} value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
        {errors && <div>{errors.email}</div>}
        <TextField name="location" variant="outlined" label="Location" fullWidth required error={errors.location} value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })} />
        {errors && <div>{errors.location}</div>}
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={postData.title}
          className={classes.selectInput}
          autoWidth
          required
          displayEmpty
          error={errors.title}
          label="Concern"
          style={{ minWidth: '96%' }}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        >
          <MenuItem value="">Concern</MenuItem>
          <MenuItem value="Energy Conservation">Energy Conservation</MenuItem>
          <MenuItem value="Waste Reduction">Waste Reduction</MenuItem>
          <MenuItem value="Sustainable Transportation">Sustainable Transportation</MenuItem>
          <MenuItem value="Water Conservation">Water Conservation</MenuItem>
        </Select>
        {errors && <div>{errors.title}</div>}

        <TextField name="message" variant="outlined" label="Statement" fullWidth required error={errors.message} multiline minRows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        {errors && <div>{errors.message}</div>}

        <div className={classes.fileInput}><span>(Optional): <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></span></div>
        <FormGroup className={classes.fileInput}>
          <FormControlLabel control={<Checkbox color="primary" defaultChecked />} label="Receive updates" />
          <FormControlLabel required control={<Checkbox color="primary" defaultChecked />} label="Subscribe to Newsletters" />
        </FormGroup>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="primary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;