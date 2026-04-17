.class public Lio/invertase/googlemobileads/ReactNativeAppModule;
.super Lio/invertase/googlemobileads/common/ReactNativeModule;
.source "ReactNativeAppModule.java"


# static fields
.field static final NAME:Ljava/lang/String; = "RNAppModule"


# direct methods
.method constructor <init>(Lcom/facebook/react/bridge/ReactApplicationContext;)V
    .locals 1

    .line 36
    const-string v0, "RNAppModule"

    invoke-direct {p0, p1, v0}, Lio/invertase/googlemobileads/common/ReactNativeModule;-><init>(Lcom/facebook/react/bridge/ReactApplicationContext;Ljava/lang/String;)V

    return-void
.end method


# virtual methods
.method public addListener(Ljava/lang/String;)V
    .locals 0
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    return-void
.end method

.method public deleteApp(Ljava/lang/String;Lcom/facebook/react/bridge/Promise;)V
    .locals 0
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    const/4 p1, 0x0

    .line 70
    invoke-interface {p2, p1}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public eventsAddListener(Ljava/lang/String;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 95
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;

    move-result-object v0

    .line 96
    invoke-virtual {v0, p1}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->addListener(Ljava/lang/String;)V

    return-void
.end method

.method public eventsGetListeners(Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 81
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;

    move-result-object v0

    .line 82
    invoke-virtual {v0}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getListenersMap()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    invoke-interface {p1, v0}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public eventsNotifyReady(Ljava/lang/Boolean;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 75
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;

    move-result-object v0

    .line 76
    invoke-virtual {v0, p1}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->notifyJsReady(Ljava/lang/Boolean;)V

    return-void
.end method

.method public eventsPing(Ljava/lang/String;Lcom/facebook/react/bridge/ReadableMap;Lcom/facebook/react/bridge/Promise;)V
    .locals 3
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 87
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;

    move-result-object v0

    .line 88
    new-instance v1, Lio/invertase/googlemobileads/common/ReactNativeEvent;

    .line 89
    invoke-static {p2}, Lio/invertase/googlemobileads/common/RCTConvert;->readableMapToWritableMap(Lcom/facebook/react/bridge/ReadableMap;)Lcom/facebook/react/bridge/WritableMap;

    move-result-object v2

    invoke-direct {v1, p1, v2}, Lio/invertase/googlemobileads/common/ReactNativeEvent;-><init>(Ljava/lang/String;Lcom/facebook/react/bridge/WritableMap;)V

    .line 88
    invoke-virtual {v0, v1}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->sendEvent(Lio/invertase/googlemobileads/interfaces/NativeEvent;)V

    .line 90
    invoke-static {p2}, Lio/invertase/googlemobileads/common/RCTConvert;->readableMapToWritableMap(Lcom/facebook/react/bridge/ReadableMap;)Lcom/facebook/react/bridge/WritableMap;

    move-result-object p1

    invoke-interface {p3, p1}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public eventsRemoveListener(Ljava/lang/String;Ljava/lang/Boolean;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 101
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;

    move-result-object v0

    .line 102
    invoke-virtual {v0, p1, p2}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->removeListener(Ljava/lang/String;Ljava/lang/Boolean;)V

    return-void
.end method

.method public initialize()V
    .locals 2

    .line 41
    invoke-super {p0}, Lio/invertase/googlemobileads/common/ReactNativeModule;->initialize()V

    .line 42
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;

    move-result-object v0

    invoke-virtual {p0}, Lio/invertase/googlemobileads/ReactNativeAppModule;->getContext()Lcom/facebook/react/bridge/ReactContext;

    move-result-object v1

    invoke-virtual {v0, v1}, Lio/invertase/googlemobileads/common/ReactNativeEventEmitter;->attachReactContext(Lcom/facebook/react/bridge/ReactContext;)V

    return-void
.end method

.method public initializeApp(Lcom/facebook/react/bridge/ReadableMap;Lcom/facebook/react/bridge/ReadableMap;Lcom/facebook/react/bridge/Promise;)V
    .locals 0
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 53
    invoke-interface {p3, p1}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public jsonGetAll(Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 124
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeJSON;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeJSON;

    move-result-object v0

    invoke-virtual {v0}, Lio/invertase/googlemobileads/common/ReactNativeJSON;->getAll()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    invoke-interface {p1, v0}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public metaGetAll(Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 118
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativeMeta;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativeMeta;

    move-result-object v0

    invoke-virtual {v0}, Lio/invertase/googlemobileads/common/ReactNativeMeta;->getAll()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    invoke-interface {p1, v0}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public preferencesClearAll(Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 147
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativePreferences;

    move-result-object v0

    invoke-virtual {v0}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->clearAll()V

    const/4 v0, 0x0

    .line 148
    invoke-interface {p1, v0}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public preferencesGetAll(Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 142
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativePreferences;

    move-result-object v0

    invoke-virtual {v0}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->getAll()Lcom/facebook/react/bridge/WritableMap;

    move-result-object v0

    invoke-interface {p1, v0}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public preferencesSetBool(Ljava/lang/String;ZLcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 130
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativePreferences;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->setBooleanValue(Ljava/lang/String;Z)V

    const/4 p1, 0x0

    .line 131
    invoke-interface {p3, p1}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public preferencesSetString(Ljava/lang/String;Ljava/lang/String;Lcom/facebook/react/bridge/Promise;)V
    .locals 1
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    .line 136
    invoke-static {}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->getSharedInstance()Lio/invertase/googlemobileads/common/ReactNativePreferences;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Lio/invertase/googlemobileads/common/ReactNativePreferences;->setStringValue(Ljava/lang/String;Ljava/lang/String;)V

    const/4 p1, 0x0

    .line 137
    invoke-interface {p3, p1}, Lcom/facebook/react/bridge/Promise;->resolve(Ljava/lang/Object;)V

    return-void
.end method

.method public removeListeners(Ljava/lang/Integer;)V
    .locals 0
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    return-void
.end method

.method public setAutomaticDataCollectionEnabled(Ljava/lang/String;Ljava/lang/Boolean;)V
    .locals 0
    .annotation runtime Lcom/facebook/react/bridge/ReactMethod;
    .end annotation

    return-void
.end method
