import { Stack } from "expo-router";
import '../globals.css';

export default function RootLayout() {
  return <Stack>

    {/* removes default header for (tabs) index */}
    <Stack.Screen 
      name="(tabs)"
      options={{ headerShown: false }}
    />

    {/* removes default header for movies component */}
    <Stack.Screen 
      name="movies/[id]"
      options={{ headerShown: false }}
    />
  </Stack>
}
