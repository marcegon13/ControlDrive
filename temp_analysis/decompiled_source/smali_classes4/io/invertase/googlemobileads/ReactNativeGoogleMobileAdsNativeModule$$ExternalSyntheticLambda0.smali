.class public final synthetic Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lcom/google/android/gms/ads/nativead/NativeAd$OnNativeAdLoadedListener;


# instance fields
.field public final synthetic f$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

.field public final synthetic f$1:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

.field public final synthetic f$2:Lcom/facebook/react/bridge/Promise;


# direct methods
.method public synthetic constructor <init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/facebook/react/bridge/Promise;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;->f$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    iput-object p2, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;->f$1:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    iput-object p3, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;->f$2:Lcom/facebook/react/bridge/Promise;

    return-void
.end method


# virtual methods
.method public final onNativeAdLoaded(Lcom/google/android/gms/ads/nativead/NativeAd;)V
    .locals 3

    .line 0
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;->f$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;

    iget-object v1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;->f$1:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    iget-object v2, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$$ExternalSyntheticLambda0;->f$2:Lcom/facebook/react/bridge/Promise;

    invoke-static {v0, v1, v2, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;->$r8$lambda$5wi7lBRhskeqGz_UqPSRE-RVDHU(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Lcom/facebook/react/bridge/Promise;Lcom/google/android/gms/ads/nativead/NativeAd;)V

    return-void
.end method
