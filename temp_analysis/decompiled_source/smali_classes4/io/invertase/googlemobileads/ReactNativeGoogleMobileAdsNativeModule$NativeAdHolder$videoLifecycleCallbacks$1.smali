.class public final Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;
.super Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;
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
        "\u0000\u0019\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0004\n\u0002\u0010\u000b\n\u0000*\u0001\u0000\u0008\n\u0018\u00002\u00020\u0001J\u0008\u0010\u0002\u001a\u00020\u0003H\u0016J\u0008\u0010\u0004\u001a\u00020\u0003H\u0016J\u0008\u0010\u0005\u001a\u00020\u0003H\u0016J\u0010\u0010\u0006\u001a\u00020\u00032\u0006\u0010\u0007\u001a\u00020\u0008H\u0016\u00a8\u0006\t"
    }
    d2 = {
        "io/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1",
        "Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;",
        "onVideoPlay",
        "",
        "onVideoPause",
        "onVideoEnd",
        "onVideoMute",
        "isMuted",
        "",
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

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    .line 122
    invoke-direct {p0}, Lcom/google/android/gms/ads/VideoController$VideoLifecycleCallbacks;-><init>()V

    return-void
.end method


# virtual methods
.method public onVideoEnd()V
    .locals 4

    .line 132
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "video_ended"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method

.method public onVideoMute(Z)V
    .locals 3

    .line 136
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    if-eqz p1, :cond_0

    .line 137
    const-string p1, "video_muted"

    goto :goto_0

    .line 139
    :cond_0
    const-string p1, "video_unmuted"

    :goto_0
    const/4 v1, 0x2

    const/4 v2, 0x0

    .line 136
    invoke-static {v0, p1, v2, v1, v2}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method

.method public onVideoPause()V
    .locals 4

    .line 128
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "video_paused"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method

.method public onVideoPlay()V
    .locals 4

    .line 124
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder$videoLifecycleCallbacks$1;->this$0:Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;

    const/4 v1, 0x0

    const/4 v2, 0x2

    const-string v3, "video_played"

    invoke-static {v0, v3, v1, v2, v1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;->emitAdEvent$default(Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsNativeModule$NativeAdHolder;Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;ILjava/lang/Object;)V

    return-void
.end method
