import React from 'react';
import PageLayout from '../components/PageLayout';
import EventBanner from '../components/UpcomingEventBanner/EventBanner';

const IndexPage : React.FunctionComponent<{}> = ({ }) => (
  <PageLayout>
    <EventBanner />
  </PageLayout>
);

export default IndexPage;