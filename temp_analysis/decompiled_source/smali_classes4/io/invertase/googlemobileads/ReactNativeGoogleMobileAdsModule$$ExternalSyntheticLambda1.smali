.class public final synthetic Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Lcom/google/android/gms/ads/OnAdInspectorClosedListener;


# instance fields
.field public final synthetic f$0:Lcom/facebook/react/bridge/Promise;


# direct methods
.method public synthetic constructor <init>(Lcom/facebook/react/bridge/Promise;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule$$ExternalSyntheticLambda1;->f$0:Lcom/facebook/react/bridge/Promise;

    return-void
.end method


# virtual methods
.method public final onAdInspectorClosed(Lcom/google/android/gms/ads/AdInspectorError;)V
    .locals 1

    .line 0
    iget-object v0, p0, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule$$ExternalSyntheticLambda1;->f$0:Lcom/facebook/react/bridge/Promise;

    invoke-static {v0, p1}, Lio/invertase/googlemobileads/ReactNativeGoogleMobileAdsModule;->$r8$lambda$1__ZA5RX0aOL9JV40bLB9JzD3o0(Lcom/facebook/react/bridge/Promise;Lcom/google/android/gms/ads/AdInspectorError;)V

    return-void
.end method
