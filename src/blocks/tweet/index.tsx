import * as React from 'react';
import {BlockProps} from '../../ReactEmbed';
import {rule} from 'p4-css';

const blockClass = rule({
  maxW: '100%',
  'twitter-widget': {
    mar: '0 !important',
  },
});

const wnd = window as any;

class TwitterTweet extends React.PureComponent<BlockProps, {}> {
  mounted: boolean = true;
  ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    require('scriptjs')('https://platform.twitter.com/widgets.js', 'tw', () => {
      if (!this.mounted) return;
      if (!wnd.twttr) {
        // tslint:disable-next-line
        console.error('Failed to load Twitter lib.');
        return;
      }
      wnd.twttr.widgets.createTweet(this.props.id, this.ref.current, {theme: this.props.isDark ? 'dark' : 'light'});
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.props.renderWrap(<div ref={this.ref} className={blockClass} />);
  }
}

export default TwitterTweet;
