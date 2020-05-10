import PropTypes from 'prop-types';
import React from 'react';

import Layout from '~/layouts/Information';

import Head from '~/components/Head';
import List from '~/components/List';

import api from '~/services/api';
import { objectLocaleString } from '~/utils';

const BrazilPage = ({ info }) => (
  <>
    <Head
      title="Covid Agora - Brasil"
      description="Acompanhe como anda a real situação do coronavírus no Brasil."
    />

    <Layout loading={!info}>
      <List
        local="Brazil"
        flag="/static/images/brazil/flag.jpg"
        lastUpdate={info && info.updated_at}
        info={info}
      />
    </Layout>
  </>
);

BrazilPage.getInitialProps = async () => {
  const { data } = await api.get('brazil').then(r => r.data);

  return { info: objectLocaleString(data) };
};

BrazilPage.propTypes = {
  info: PropTypes.shape({
    updated_at: PropTypes.string,
  }).isRequired,
};

export default BrazilPage;
