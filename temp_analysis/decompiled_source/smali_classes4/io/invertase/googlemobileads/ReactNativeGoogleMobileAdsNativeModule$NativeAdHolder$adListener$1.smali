.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;
.super Lcom/google/android/gms/ads/AdListener;
.source "ReactNativeGoogleMobileAdsNativeModule.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;-><init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0013\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0004*\u0001\u0000\u0008\n\u0018\u00002\u00020\u0001J\u0008\u0010\u0002\u001a\u00020\u0003H\u0016J\u0008\u0010\u0004\u001a\u00020\u0003H\u0016J\u0008\u0010\u0005\u001a\u00020\u0003H\u0016J\u0008\u0010\u0006\u001a\u00020\u0003H\u0016\u00a8\u0006\u0007"
    }
    d2 = {
        "io/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1",
        "Lcom/google/android/gms/ads/AdListener;",
        "onAdImpression",
        "",
        "onAdClicked",
        "onAdOpened",
        "onAdClosed",
        "react-native-google-mobile-ads_release"
    }
    k = 0x1
    mv = {
        0x2,
        0x1,
        0x0
    }
    xi = 0x30
.end annotation


# instance fields
.field final synthetic this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;


# direct methods
.method constructor <init>(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;)V
    .locals 0

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    .line 104
    invoke-direct {p0}, Lcom/google/android/gms/ads/AdListener;-><init>()V

    return-void
.end method


# virtual methods
.method public onAdClicked()V
    .locals 4

    .line 110
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "clicked"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method

.method public onAdClosed()V
    .locals 4

    .line 118
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "closed"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method

.method public onAdImpression()V
    .locals 4

    .line 106
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "impression"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method

.method public onAdOpened()V
    .locals 4

    .line 114
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$adListener$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "opened"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method
