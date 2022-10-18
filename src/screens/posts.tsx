import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {useGetPostsQuery} from '../services/post.service';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const PostScreen = () => {
  const {data, isLoading, error} = useGetPostsQuery();
  console.log({data, isLoading, error});

  const state = useSelector((state: RootState) => state.postApi);
  console.log(state);

  return (
    <View>
      {isLoading && <ActivityIndicator />}

      {data &&
        data.items.map(item => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default PostScreen;
