## CMP Enabled

```js
function isCmpEnabled() {
  return !!window.__tcfapi || (!!window.__cmp && window.cmpEnabled);
}
```

## Google Analytics

```js
function hasGoogleAnalyticsConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 10211 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[5] &&
          additionalVendorConsents.vendorConsents[4];
      });
    });
  } else {
    return true;
  }

  return consent;
}
```

## Google Ads

```js
function hasGoogleAdsConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 10210 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[2] &&
          vendorConsents.purposeConsents[3] &&
          vendorConsents.purposeConsents[4] &&
          additionalVendorConsents.vendorConsents[91];
      });
    });
  } else {
    return true;
  }

  return consent;
}
```

## Bing

```js
function hasBingConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 10012 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[2] &&
          vendorConsents.purposeConsents[3] &&
          vendorConsents.purposeConsents[4] &&
          vendorConsents.purposeConsents[5] &&
          additionalVendorConsents.vendorConsents[21];
      });
    });
  } else {
    return true;
  }

  return consent;
}
```

## Facebook

```js
function hasFacebookConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 20089 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[2] &&
          vendorConsents.purposeConsents[3] &&
          vendorConsents.purposeConsents[5] &&
          additionalVendorConsents.vendorConsents[16];
      });
    });
  } else {
    return true;
  }

  return consent;
}
```

## Krux

```js
function hasKruxConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 21126 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[2] &&
          vendorConsents.purposeConsents[3] &&
          vendorConsents.purposeConsents[4] &&
          vendorConsents.purposeConsents[5] &&
          additionalVendorConsents.vendorConsents[25];
      });
    });
  } else {
    return true;
  }

  return consent;
}
```

## RTB House

```js
function hasRTBHouseConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 16 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      consent =
        vendorConsents.purposeConsents[1] && vendorConsents.purposeConsents[2] && vendorConsents.vendorConsents[16];
    });
  } else {
    return true;
  }

  return consent;
}
```

## MouseFlow

```js
function hasMouseFlowConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 10188 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[5] &&
          additionalVendorConsents.vendorConsents[223];
      });
    });
  } else {
    return true;
  }

  return consent;
}
```



## Easy Feedback

```js
function hasSurveyConsent() {
  var consent = false;

  if (window.__tcfapi) {
    __tcfapi(
      'checkConsent',
      2,
      function (data, success) {
        consent = data;
      },
      { data: { vendorId: 10304 } }
    );
  } else if (window.__cmp && window.cmpEnabled) {
    window.__cmp('getVendorConsents', null, function (vendorConsents) {
      window.__cmp('getAdditionalVendorConsents', null, function (additionalVendorConsents) {
        consent =
          vendorConsents.purposeConsents[1] &&
          vendorConsents.purposeConsents[9] &&
          vendorConsents.purposeConsents[10]
      });
    });
  } else {
    return true;
  }

  return consent;
}
```
