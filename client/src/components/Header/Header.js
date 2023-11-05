import "./header.css";
import { Typography } from "@material-ui/core";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, WhatsappShareButton, WhatsappIcon } from 'react-share';

const Header = ({ type }) => {
  return (
    <div
      className={
        type === "list" ? "container listMode" : "container"
      }
    >
      <h2>MAKE CHANGES THAT MATTER</h2>
      <>
        <hr />
        <p>
          Here are some of the promises you could make, that will impact your life on the planet
          </p>
          <ul>
            <li>I will refuse plastic cutlery with takeaway food.</li>
            <li>I will use a reusable coffee cup rather than disposable ones.</li>
            <li>I'll turn down to 30 degrees.</li>
            <li>I will make my next vehicle an electric one.</li>
          </ul>
        <Typography className="socialIcon">
          <FacebookShareButton
            url={'https://www.example.com'}
            quote={'Dummy text!'}
            hashtag="#muo"
            style={{ margin: '3px' }}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={'https://www.example.com'}
            quote={'Dummy text!'}
            hashtag="#muo"
            style={{ margin: '3px' }}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={'https://www.example.com'}
            quote={'Dummy text!'}
            hashtag="#muo"
            style={{ margin: '3px' }}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={'https://www.example.com'}
            quote={'Dummy text!'}
            hashtag="#muo"
            style={{ margin: '3px' }}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Typography>
      </>
    </div>

  );
};

export default Header;
