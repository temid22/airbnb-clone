import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const categories = [
  {
    name: 'Tiny homes',
    icon: 'home',
  },
  {
    name: 'Cabins',
    icon: 'house-siding',
  },
  {
    name: 'Trending',
    icon: 'local-fire-department',
  },
  {
    name: 'Play',
    icon: 'videogame-asset',
  },
  {
    name: 'City',
    icon: 'apartment',
  },
  {
    name: 'Beachfront',
    icon: 'beach-access',
  },
  {
    name: 'Countryside',
    icon: 'nature-people',
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
                <Ionicons name='search' size={24} />
                <View>
                  <Text style={{ fontFamily: 'Nunito-SB' }}>Where to? </Text>
                  <Text style={{ fontFamily: 'Nunito-B', color: Colors.grey }}>
                    Anywhere · Any week
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name='options-outline' size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    height: 130,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#A2A0A2',
    borderRadius: 24,
  },
  searchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderColor: Colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    // flex: 1,
    width: 300,
    padding: 14,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOpacity: 0.12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
