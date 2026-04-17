.class final Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;
.super Ljava/lang/Object;
.source "AnchoredDraggable.kt"

# interfaces
.implements Lcom/composables/core/androidx/compose/foundation/gestures/UnstyledDraggableAnchors;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;",
        "Lcom/composables/core/androidx/compose/foundation/gestures/UnstyledDraggableAnchors<",
        "TT;>;"
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nAnchoredDraggable.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AnchoredDraggable.kt\ncom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors\n+ 2 ObjectFloatMap.kt\ncom/composables/core/androidx/collection/ObjectFloatMap\n+ 3 ScatterMap.kt\ncom/composables/core/androidx/collection/ScatterMapKt\n*L\n1#1,1221:1\n402#2,4:1222\n374#2,6:1226\n384#2,3:1233\n387#2,2:1237\n407#2,2:1239\n390#2,6:1241\n409#2:1247\n402#2,4:1248\n374#2,6:1252\n384#2,3:1259\n387#2,2:1263\n407#2,2:1265\n390#2,6:1267\n409#2:1273\n402#2,4:1274\n374#2,6:1278\n384#2,3:1285\n387#2,2:1289\n407#2,2:1291\n390#2,6:1293\n409#2:1299\n1956#3:1232\n1820#3:1236\n1956#3:1258\n1820#3:1262\n1956#3:1284\n1820#3:1288\n*S KotlinDebug\n*F\n+ 1 AnchoredDraggable.kt\ncom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors\n*L\n1143#1:1222,4\n1143#1:1226,6\n1143#1:1233,3\n1143#1:1237,2\n1143#1:1239,2\n1143#1:1241,6\n1143#1:1247\n1159#1:1248,4\n1159#1:1252,6\n1159#1:1259,3\n1159#1:1263,2\n1159#1:1265,2\n1159#1:1267,6\n1159#1:1273\n1189#1:1274,4\n1189#1:1278,6\n1189#1:1285,3\n1189#1:1289,2\n1189#1:1291,2\n1189#1:1293,6\n1189#1:1299\n1143#1:1232\n1143#1:1236\n1159#1:1258\n1159#1:1262\n1189#1:1284\n1189#1:1288\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000L\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0010\u0007\n\u0002\u0008\u0003\n\u0002\u0010\u000b\n\u0002\u0008\t\n\u0002\u0010\u0008\n\u0002\u0008\u0004\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0003\u0008\u0002\u0018\u0000*\u0004\u0008\u0000\u0010\u00012\u0008\u0012\u0004\u0012\u0002H\u00010\u0002B\u0015\u0012\u000c\u0010\u0003\u001a\u0008\u0012\u0004\u0012\u00028\u00000\u0004\u00a2\u0006\u0004\u0008\u0005\u0010\u0006J\u0015\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00028\u0000H\u0016\u00a2\u0006\u0002\u0010\nJ\u0015\u0010\u000b\u001a\u00020\u000c2\u0006\u0010\t\u001a\u00028\u0000H\u0016\u00a2\u0006\u0002\u0010\rJ\u0017\u0010\u000e\u001a\u0004\u0018\u00018\u00002\u0006\u0010\u000f\u001a\u00020\u0008H\u0016\u00a2\u0006\u0002\u0010\u0010J\u001f\u0010\u000e\u001a\u0004\u0018\u00018\u00002\u0006\u0010\u000f\u001a\u00020\u00082\u0006\u0010\u0011\u001a\u00020\u000cH\u0016\u00a2\u0006\u0002\u0010\u0012J\u0008\u0010\u0013\u001a\u00020\u0008H\u0016J\u0008\u0010\u0014\u001a\u00020\u0008H\u0016J\u0013\u0010\u0019\u001a\u00020\u000c2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u001bH\u0096\u0002J\u0008\u0010\u001c\u001a\u00020\u0016H\u0016J\u0008\u0010\u001d\u001a\u00020\u001eH\u0016J@\u0010\u001f\u001a\u00020 26\u0010!\u001a2\u0012\u0013\u0012\u00118\u0000\u00a2\u0006\u000c\u0008#\u0012\u0008\u0008$\u0012\u0004\u0008\u0008(%\u0012\u0013\u0012\u00110\u0008\u00a2\u0006\u000c\u0008#\u0012\u0008\u0008$\u0012\u0004\u0008\u0008(\u000f\u0012\u0004\u0012\u00020 0\"H\u0016R\u0014\u0010\u0003\u001a\u0008\u0012\u0004\u0012\u00028\u00000\u0004X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0014\u0010\u0015\u001a\u00020\u00168VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u0017\u0010\u0018\u00a8\u0006&"
    }
    d2 = {
        "Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;",
        "T",
        "Lcom/composables/core/androidx/compose/foundation/gestures/UnstyledDraggableAnchors;",
        "anchors",
        "Lcom/composables/core/androidx/collection/ObjectFloatMap;",
        "<init>",
        "(Lcom/composables/core/androidx/collection/ObjectFloatMap;)V",
        "positionOf",
        "",
        "value",
        "(Ljava/lang/Object;)F",
        "hasAnchorFor",
        "",
        "(Ljava/lang/Object;)Z",
        "closestAnchor",
        "position",
        "(F)Ljava/lang/Object;",
        "searchUpwards",
        "(FZ)Ljava/lang/Object;",
        "minAnchor",
        "maxAnchor",
        "size",
        "",
        "getSize",
        "()I",
        "equals",
        "other",
        "",
        "hashCode",
        "toString",
        "",
        "forEach",
        "",
        "block",
        "Lkotlin/Function2;",
        "Lkotlin/ParameterName;",
        "name",
        "anchor",
        "core_release"
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
.field private final anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/composables/core/androidx/collection/ObjectFloatMap<",
            "TT;>;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Lcom/composables/core/androidx/collection/ObjectFloatMap;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/composables/core/androidx/collection/ObjectFloatMap<",
            "TT;>;)V"
        }
    .end annotation

    const-string v0, "anchors"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 1134
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    return-void
.end method


# virtual methods
.method public closestAnchor(F)Ljava/lang/Object;
    .locals 18
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(F)TT;"
        }
    .end annotation

    move-object/from16 v0, p0

    .line 1143
    iget-object v1, v0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    .line 1222
    iget-object v2, v1, Lcom/composables/core/androidx/collection/ObjectFloatMap;->keys:[Ljava/lang/Object;

    .line 1223
    iget-object v3, v1, Lcom/composables/core/androidx/collection/ObjectFloatMap;->values:[F

    .line 1226
    iget-object v1, v1, Lcom/composables/core/androidx/collection/ObjectFloatMap;->metadata:[J

    .line 1227
    array-length v4, v1

    add-int/lit8 v4, v4, -0x2

    const/4 v5, 0x0

    if-ltz v4, :cond_4

    const/high16 v6, 0x7f800000    # Float.POSITIVE_INFINITY

    const/4 v7, 0x0

    move v8, v7

    .line 1230
    :goto_0
    aget-wide v9, v1, v8

    not-long v11, v9

    const/4 v13, 0x7

    shl-long/2addr v11, v13

    and-long/2addr v11, v9

    const-wide v13, -0x7f7f7f7f7f7f7f80L    # -2.937446524422997E-306

    and-long/2addr v11, v13

    cmp-long v11, v11, v13

    if-eqz v11, :cond_3

    sub-int v11, v8, v4

    not-int v11, v11

    ushr-int/lit8 v11, v11, 0x1f

    const/16 v12, 0x8

    rsub-int/lit8 v11, v11, 0x8

    move v13, v7

    :goto_1
    if-ge v13, v11, :cond_1

    const-wide/16 v14, 0xff

    and-long/2addr v14, v9

    const-wide/16 v16, 0x80

    cmp-long v14, v14, v16

    if-gez v14, :cond_0

    shl-int/lit8 v14, v8, 0x3

    add-int/2addr v14, v13

    .line 1239
    aget-object v15, v2, v14

    aget v14, v3, v14

    sub-float v14, p1, v14

    .line 1144
    invoke-static {v14}, Ljava/lang/Math;->abs(F)F

    move-result v14

    cmpg-float v16, v14, v6

    if-gtz v16, :cond_0

    move v6, v14

    move-object v5, v15

    :cond_0
    shr-long/2addr v9, v12

    add-int/lit8 v13, v13, 0x1

    goto :goto_1

    :cond_1
    if-ne v11, v12, :cond_2

    goto :goto_2

    :cond_2
    return-object v5

    :cond_3
    :goto_2
    if-eq v8, v4, :cond_4

    add-int/lit8 v8, v8, 0x1

    goto :goto_0

    :cond_4
    return-object v5
.end method

.method public closestAnchor(FZ)Ljava/lang/Object;
    .locals 19
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(FZ)TT;"
        }
    .end annotation

    move-object/from16 v0, p0

    .line 1159
    iget-object v1, v0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    .line 1248
    iget-object v2, v1, Lcom/composables/core/androidx/collection/ObjectFloatMap;->keys:[Ljava/lang/Object;

    .line 1249
    iget-object v3, v1, Lcom/composables/core/androidx/collection/ObjectFloatMap;->values:[F

    .line 1252
    iget-object v1, v1, Lcom/composables/core/androidx/collection/ObjectFloatMap;->metadata:[J

    .line 1253
    array-length v4, v1

    add-int/lit8 v4, v4, -0x2

    const/4 v5, 0x0

    if-ltz v4, :cond_6

    const/high16 v6, 0x7f800000    # Float.POSITIVE_INFINITY

    const/4 v7, 0x0

    move v9, v6

    move v8, v7

    .line 1256
    :goto_0
    aget-wide v10, v1, v8

    not-long v12, v10

    const/4 v14, 0x7

    shl-long/2addr v12, v14

    and-long/2addr v12, v10

    const-wide v14, -0x7f7f7f7f7f7f7f80L    # -2.937446524422997E-306

    and-long/2addr v12, v14

    cmp-long v12, v12, v14

    if-eqz v12, :cond_5

    sub-int v12, v8, v4

    not-int v12, v12

    ushr-int/lit8 v12, v12, 0x1f

    const/16 v13, 0x8

    rsub-int/lit8 v12, v12, 0x8

    move v14, v7

    :goto_1
    if-ge v14, v12, :cond_3

    const-wide/16 v15, 0xff

    and-long/2addr v15, v10

    const-wide/16 v17, 0x80

    cmp-long v15, v15, v17

    if-gez v15, :cond_2

    shl-int/lit8 v15, v8, 0x3

    add-int/2addr v15, v14

    .line 1265
    aget-object v16, v2, v15

    aget v15, v3, v15

    if-eqz p2, :cond_0

    sub-float v15, v15, p1

    goto :goto_2

    :cond_0
    sub-float v15, p1, v15

    :goto_2
    const/16 v17, 0x0

    cmpg-float v17, v15, v17

    if-gez v17, :cond_1

    move v15, v6

    :cond_1
    cmpg-float v17, v15, v9

    if-gtz v17, :cond_2

    move v9, v15

    move-object/from16 v5, v16

    :cond_2
    shr-long/2addr v10, v13

    add-int/lit8 v14, v14, 0x1

    goto :goto_1

    :cond_3
    if-ne v12, v13, :cond_4

    goto :goto_3

    :cond_4
    return-object v5

    :cond_5
    :goto_3
    if-eq v8, v4, :cond_6

    add-int/lit8 v8, v8, 0x1

    goto :goto_0

    :cond_6
    return-object v5
.end method

.method public equals(Ljava/lang/Object;)Z
    .locals 1

    if-ne p0, p1, :cond_0

    const/4 p1, 0x1

    return p1

    .line 1179
    :cond_0
    instance-of v0, p1, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;

    if-nez v0, :cond_1

    const/4 p1, 0x0

    return p1

    .line 1181
    :cond_1
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    check-cast p1, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;

    iget-object p1, p1, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    invoke-static {v0, p1}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public forEach(Lkotlin/jvm/functions/Function2;)V
    .locals 17
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lkotlin/jvm/functions/Function2<",
            "-TT;-",
            "Ljava/lang/Float;",
            "Lkotlin/Unit;",
            ">;)V"
        }
    .end annotation

    move-object/from16 v0, p1

    const-string v1, "block"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    move-object/from16 v1, p0

    .line 1189
    iget-object v2, v1, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    .line 1274
    iget-object v3, v2, Lcom/composables/core/androidx/collection/ObjectFloatMap;->keys:[Ljava/lang/Object;

    .line 1275
    iget-object v4, v2, Lcom/composables/core/androidx/collection/ObjectFloatMap;->values:[F

    .line 1278
    iget-object v2, v2, Lcom/composables/core/androidx/collection/ObjectFloatMap;->metadata:[J

    .line 1279
    array-length v5, v2

    add-int/lit8 v5, v5, -0x2

    if-ltz v5, :cond_3

    const/4 v6, 0x0

    move v7, v6

    .line 1282
    :goto_0
    aget-wide v8, v2, v7

    not-long v10, v8

    const/4 v12, 0x7

    shl-long/2addr v10, v12

    and-long/2addr v10, v8

    const-wide v12, -0x7f7f7f7f7f7f7f80L    # -2.937446524422997E-306

    and-long/2addr v10, v12

    cmp-long v10, v10, v12

    if-eqz v10, :cond_2

    sub-int v10, v7, v5

    not-int v10, v10

    ushr-int/lit8 v10, v10, 0x1f

    const/16 v11, 0x8

    rsub-int/lit8 v10, v10, 0x8

    move v12, v6

    :goto_1
    if-ge v12, v10, :cond_1

    const-wide/16 v13, 0xff

    and-long/2addr v13, v8

    const-wide/16 v15, 0x80

    cmp-long v13, v13, v15

    if-gez v13, :cond_0

    shl-int/lit8 v13, v7, 0x3

    add-int/2addr v13, v12

    .line 1291
    aget-object v14, v3, v13

    aget v13, v4, v13

    invoke-static {v13}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object v13

    invoke-interface {v0, v14, v13}, Lkotlin/jvm/functions/Function2;->invoke(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :cond_0
    shr-long/2addr v8, v11

    add-int/lit8 v12, v12, 0x1

    goto :goto_1

    :cond_1
    if-ne v10, v11, :cond_3

    :cond_2
    if-eq v7, v5, :cond_3

    add-int/lit8 v7, v7, 0x1

    goto :goto_0

    :cond_3
    return-void
.end method

.method public getSize()I
    .locals 1

    .line 1175
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    invoke-virtual {v0}, Lcom/composables/core/androidx/collection/ObjectFloatMap;->getSize()I

    move-result v0

    return v0
.end method

.method public hasAnchorFor(Ljava/lang/Object;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;)Z"
        }
    .end annotation

    .line 1138
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    invoke-virtual {v0, p1}, Lcom/composables/core/androidx/collection/ObjectFloatMap;->containsKey(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public hashCode()I
    .locals 1

    .line 1184
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    invoke-virtual {v0}, Lcom/composables/core/androidx/collection/ObjectFloatMap;->hashCode()I

    move-result v0

    mul-int/lit8 v0, v0, 0x1f

    return v0
.end method

.method public maxAnchor()F
    .locals 1

    .line 1172
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    invoke-static {v0}, Lcom/composables/core/androidx/compose/foundation/gestures/AnchoredDraggableKt;->access$maxValueOrNaN(Lcom/composables/core/androidx/collection/ObjectFloatMap;)F

    move-result v0

    return v0
.end method

.method public minAnchor()F
    .locals 1

    .line 1170
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    invoke-static {v0}, Lcom/composables/core/androidx/compose/foundation/gestures/AnchoredDraggableKt;->access$minValueOrNaN(Lcom/composables/core/androidx/collection/ObjectFloatMap;)F

    move-result v0

    return v0
.end method

.method public positionOf(Ljava/lang/Object;)F
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;)F"
        }
    .end annotation

    .line 1136
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    const/high16 v1, 0x7fc00000    # Float.NaN

    invoke-virtual {v0, p1, v1}, Lcom/composables/core/androidx/collection/ObjectFloatMap;->getOrDefault(Ljava/lang/Object;F)F

    move-result p1

    return p1
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 1186
    iget-object v0, p0, Lcom/composables/core/androidx/compose/foundation/gestures/MapUnstyledDraggableAnchors;->anchors:Lcom/composables/core/androidx/collection/ObjectFloatMap;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "MapDraggableAnchors("

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ")"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
