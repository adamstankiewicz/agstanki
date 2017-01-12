import ReactGA from 'react-ga';

export function handleGAEventExternalLink(e, eventLabel) {
  e.preventDefault();
  const redirectUrl = e.currentTarget.getAttribute('href');
  ReactGA.outboundLink({
    label: eventLabel
  }, () => {
    window.location.href = redirectUrl;
  });
}

export function handleGAEventLink(e, category, action) {
  ReactGA.event({ category, action });
}
