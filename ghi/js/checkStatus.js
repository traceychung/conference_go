// Get the cookie out of the cookie store
// const cookie = "eyJleHAiOiAxNjY5NzYxNjg5LCAiaWF0IjogMTY2OTY3NTI4OSwgImp0aSI6ICJmZTI1MjczNC0xZjQ5LTRiMmItOGRlNy1jNzMxM2EyMWM0NTMiLCAicmVmcmVzaF9pYXQiOiAxNjY5Njc1Mjg5LCAidHlwZSI6ICJhY2Nlc3MiLCAidXNlciI6IHsiaWQiOiAxLCAicGVybXMiOiBbImRqd3RvLmRlbGV0ZV9qd3RibGFja2xpc3QiLCAiZXZlbnRzLnZpZXdfc3RhdGUiLCAicHJlc2VudGF0aW9ucy52aWV3X3N0YXR1cyIsICJldmVudHMuZGVsZXRlX2xvY2F0aW9uIiwgImF1dGguY2hhbmdlX2dyb3VwIiwgImV2ZW50cy52aWV3X2xvY2F0aW9uIiwgInNlc3Npb25zLnZpZXdfc2Vzc2lvbiIsICJzZXNzaW9ucy5hZGRfc2Vzc2lvbiIsICJjb250ZW50dHlwZXMuZGVsZXRlX2NvbnRlbnR0eXBlIiwgInByZXNlbnRhdGlvbnMuY2hhbmdlX3N0YXR1cyIsICJhY2NvdW50cy5jaGFuZ2VfdXNlciIsICJldmVudHMuY2hhbmdlX2NvbmZlcmVuY2UiLCAiZXZlbnRzLmFkZF9jb25mZXJlbmNlIiwgImFjY291bnRzLnZpZXdfdXNlciIsICJwcmVzZW50YXRpb25zLnZpZXdfcHJlc2VudGF0aW9uIiwgImFjY291bnRzLmRlbGV0ZV91c2VyIiwgImV2ZW50cy5hZGRfc3RhdGUiLCAiYXV0aC5hZGRfcGVybWlzc2lvbiIsICJhdXRoLmRlbGV0ZV9ncm91cCIsICJjb250ZW50dHlwZXMudmlld19jb250ZW50dHlwZSIsICJhdXRoLmFkZF9ncm91cCIsICJhdXRoLmNoYW5nZV9wZXJtaXNzaW9uIiwgInNlc3Npb25zLmNoYW5nZV9zZXNzaW9uIiwgImFkbWluLmFkZF9sb2dlbnRyeSIsICJhZG1pbi5kZWxldGVfbG9nZW50cnkiLCAiZGp3dG8uY2hhbmdlX2p3dGJsYWNrbGlzdCIsICJldmVudHMuY2hhbmdlX2xvY2F0aW9uIiwgImV2ZW50cy5jaGFuZ2Vfc3RhdGUiLCAiYWNjb3VudHMuYWRkX3VzZXIiLCAiZXZlbnRzLmRlbGV0ZV9zdGF0ZSIsICJldmVudHMuZGVsZXRlX2NvbmZlcmVuY2UiLCAicHJlc2VudGF0aW9ucy5hZGRfcHJlc2VudGF0aW9uIiwgInByZXNlbnRhdGlvbnMuZGVsZXRlX3ByZXNlbnRhdGlvbiIsICJhdXRoLnZpZXdfZ3JvdXAiLCAiZGp3dG8udmlld19qd3RibGFja2xpc3QiLCAicHJlc2VudGF0aW9ucy5jaGFuZ2VfcHJlc2VudGF0aW9uIiwgImFkbWluLmNoYW5nZV9sb2dlbnRyeSIsICJhZG1pbi52aWV3X2xvZ2VudHJ5IiwgImF1dGguZGVsZXRlX3Blcm1pc3Npb24iLCAicHJlc2VudGF0aW9ucy5kZWxldGVfc3RhdHVzIiwgImNvbnRlbnR0eXBlcy5jaGFuZ2VfY29udGVudHR5cGUiLCAiYXV0aC52aWV3X3Blcm1pc3Npb24iLCAicHJlc2VudGF0aW9ucy5hZGRfc3RhdHVzIiwgImNvbnRlbnR0eXBlcy5hZGRfY29udGVudHR5cGUiLCAiZXZlbnRzLmFkZF9sb2NhdGlvbiIsICJzZXNzaW9ucy5kZWxldGVfc2Vzc2lvbiIsICJkand0by5hZGRfand0YmxhY2tsaXN0IiwgImV2ZW50cy52aWV3X2NvbmZlcmVuY2UiXSwgInVzZXJuYW1lIjogInRyYWNleWNodW5nIn19";
const payloadCookie = await cookieStore.get("jwt_access_payload");
if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
//   const encodedPayload = JSON.parse(payloadCookie.value);

  // Convert the encoded payload from base64 to normal string
  const decodedPayload = atob(payloadCookie.value)// FINISH THIS

  // The payload is a JSON-formatted string, so parse it
  const payload = JSON.parse(decodedPayload)// FINISH THIS

  // Print the payload
  console.log(payload);

  // Check if "events.add_conference" is in the permissions.
  // If it is, remove 'd-none' from the link
  const permissions = payload.user.perms
  if (permissions.includes("events.add_conference")) {
    const newConf = document.getElementById("new-conference");
    newConf.classList.remove("d-none");
  };

  // Check if "events.add_location" is in the permissions.
  // If it is, remove 'd-none' from the link
  if (permissions.includes("events.add_location")) {
    const newLoc = document.getElementById("new-location");
    newLoc.classList.remove("d-none");
  };
} else {
    console.log("Cookie not found")
};
