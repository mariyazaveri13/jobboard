import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import { useRouter } from 'expo-router';

import { COLORS } from '../../../constants';

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

import styles from './nearbyjobs.style';

import useFetch from '../../../hook/useFetch';

const NearbyJobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    page: '1',
    num_pages: '1',
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Near By jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator
            size='large'
            color={COLORS.primary}></ActivityIndicator>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() =>
                router.push(`/job-details/${job.job_id}`)
              }></NearbyJobCard>
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
