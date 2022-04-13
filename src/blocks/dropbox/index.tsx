import * as React from 'react';
import {BlockProps} from '../..';

const script = document.createElement('script');
script.type = 'text/javascript';
script.id = 'dropboxjs';
const DROPBOX_APP_KEY = (window as any).DROPBOX_APP_KEY;
if (DROPBOX_APP_KEY) script.setAttribute('data-app-key', DROPBOX_APP_KEY);
script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
document.body.append(script);

declare const Dropbox: any;

const DropboxUi: React.FC<BlockProps> = ({url, renderWrap}) => {
  const ref = React.useRef();
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const embed = (Dropbox as any).embed({
      link: url,
      file: {
        zoom: "best" // or "fit"
      },
      folder: {
        view: "list", // or "grid"
        headerSize: "normal" // or "small"
      }
    }, ref.current);
    return () => {
      (Dropbox as any).unmount(embed);
    };
  }, []);

  return renderWrap(
    <div ref={ref as any} style={{height: 500}} />,
  );
};

const WithDropbox: React.FC<BlockProps> = (props) => {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    let mounted = true;
    const wait = () => {
      if (!mounted) return;
      if (typeof Dropbox !== 'undefined') {
        setReady(true);
        return;
      }
      setTimeout(wait, 100);
    };
    wait();
    return () => {
      mounted = false;
    };
  }, []);

  if (!ready) return null;

  return <DropboxUi {...props} />;
};

export default WithDropbox;
